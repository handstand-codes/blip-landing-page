import React, { useEffect } from "react";
import * as THREE from "three";
import NormalMap from "../../assets/images/blip-normal.png";
import * as styles from "./StarCanvas.module.scss";

const StarCanvas = () => {
  useEffect(() => {
    if (typeof window === `undefined`) {
      return;
    }

    // Canvas
    const canvas = document.getElementById(`canvas`);

    // Scene
    const scene = new THREE.Scene();

    // Objects
    const geometry = new THREE.BoxGeometry(1, 1, 1);

    // Loading
    const textureLoader = new THREE.TextureLoader();
    const normalTexture = textureLoader.load(NormalMap);

    // Materials
    const material = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0xffffff),
      roughness: 0.4,
      metalness: 1,
      normalMap: normalTexture
    });

    // Mesh
    const box = new THREE.Mesh(geometry, material);
    scene.add(box);

    // Lights
    const pointLight = new THREE.PointLight(`#CDA5FF`, 0.1);
    pointLight.position.x = 2;
    pointLight.position.y = 3;
    pointLight.position.z = 4;
    scene.add(pointLight);

    // Sizes
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight
    };

    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 1;
    scene.add(camera);

    // Update light position on mousemove
    window.addEventListener(`mousemove`, (e) => {
      const pageWidth = window.innerWidth;
      const mouseWidthRatio = e.clientX / pageWidth;
      const pageHeight = window.innerHeight;
      const mouseHeightRatio = 1 - e.clientY / pageHeight;

      const minX = -6;
      const maxX = 6;
      const difX = Math.abs(minX - maxX);
      const valX = difX * mouseWidthRatio - maxX;
      const minY = -6;
      const maxY = 6;
      const difY = Math.abs(minY - maxY);
      const valY = difY * mouseHeightRatio - maxY;

      pointLight.position.set(valX, valY, 1);
    });

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Handle resize
    window.addEventListener(`resize`, () => {
      // Update sizes
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      // Update camera
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      // Update renderer
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    // Animate

    // const clock = new THREE.Clock();
    const tick = () => {
      // const elapsedTime = clock.getElapsedTime();
      // sphere.rotation.y = 0.2 * elapsedTime;

      pointLight.lookAt(box.position);

      // Render
      renderer.render(scene, camera);

      // Call tick again on the next frame
      window.requestAnimationFrame(tick);
    };

    tick();
  }, []);

  return <canvas className={styles.canvas} id="canvas" />;
};

export default StarCanvas;
