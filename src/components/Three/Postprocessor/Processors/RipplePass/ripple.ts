import * as THREE from "three";

export class RippleRenderer {
  private _scene: THREE.Scene;
  private _target: THREE.WebGLRenderTarget;
  private _camera: THREE.OrthographicCamera;
  private _meshs: THREE.Mesh[] = [];
  private _max = 100;
  private _frequency = 5;
  private _mouse = new THREE.Vector2(0, 0);
  private _prevMouse = new THREE.Vector2(0, 0);
  private _currentWave = 0;

  constructor(private _texture: THREE.Texture, private _dimensions: Object) {
    this._scene = new THREE.Scene();
    this._target = new THREE.WebGLRenderTarget(
      window.innerWidth,
      window.innerHeight
    );

    //
    // camera
    const { width, height, near, far } = this._cameraProps();
    this._camera = new THREE.OrthographicCamera(
      width / -2,
      width / 2,
      height / 2,
      height / -2,
      near,
      far
    );
    this._camera.position.set(0, 0, 2);

    //
    // mesh
    this._createMesh();

    //
    // events
    window.addEventListener("resize", this._handleResize);
  }

  private _cameraProps = () => {
    return {
      width: this._dimensions.width,
      height: this._dimensions.height,
      near: -10,
      far: 10
    };
  };

  private _createMesh = () => {
    const size = 64;
    const geometry = new THREE.PlaneGeometry(size, size);
    const material = new THREE.MeshBasicMaterial({
      map: this._texture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthTest: false,
      depthWrite: false
    });
    for (let i = 0; i < this._max; i++) {
      const mesh = new THREE.Mesh(geometry.clone(), material.clone());
      mesh.rotateZ(2 * Math.PI * Math.random());
      mesh.visible = false;
      this._scene.add(mesh);
      this._meshs.push(mesh);
    }
  };

  private _handleResize = () => {
    const { width, height } = this._cameraProps();
    this._camera.left = width / -2;
    this._camera.right = width / 2;
    this._camera.top = height / 2;
    this._camera.bottom = height / -2;
    this._camera.updateProjectionMatrix();
    this._target.setSize(this._dimensions.width, this._dimensions.height);
  };

  private _setNewWave = () => {
    const mesh = this._meshs[this._currentWave];

    mesh.visible = true;
    mesh.position.set(this._mouse.x, this._mouse.y, 0);
    mesh.scale.x = mesh.scale.y = 0.2;
    (mesh.material as THREE.MeshBasicMaterial).opacity = 0.5;
  };

  private _trackMousePos = () => {
    const distance = this._mouse.distanceTo(this._prevMouse);

    if (this._frequency < distance) {
      this._setNewWave();
      this._currentWave = (this._currentWave + 1) % this._max;
    }

    this._prevMouse.x = this._mouse.x;
    this._prevMouse.y = this._mouse.y;
  };

  //

  setMouse = (pos) => {
    this._mouse.x = pos.x - this._dimensions.width / 2;
    this._mouse.y = this._dimensions.height / 2 - pos.y;
  };

  setDimensions = (dimensions) => {
    this._dimensions = dimensions;
  };

  update = (gl: THREE.WebGLRenderer, uTexture: THREE.IUniform<any>) => {
    this._trackMousePos();

    gl.setRenderTarget(this._target);
    gl.render(this._scene, this._camera);
    uTexture.value = this._target.texture;
    gl.setRenderTarget(null);
    gl.clear();

    this._meshs.forEach((mesh) => {
      if (mesh.visible) {
        const material = mesh.material as THREE.MeshBasicMaterial;

        mesh.rotation.z += 0.02;
        material.opacity *= 0.97;
        mesh.scale.x = 0.98 * mesh.scale.x + 0.17;
        mesh.scale.y = mesh.scale.x;

        if (material.opacity < 0.002) {
          mesh.visible = false;
        }
      }
    });
  };

  dispose = () => {
    window.removeEventListener("resize", this._handleResize);
  };
}
