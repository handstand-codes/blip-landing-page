import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import styled from "@emotion/styled";
import { Scrambler, SliceContainer } from "~components";
import { breakpoint } from "~utils/css.js";

const TitleWrapper = styled.p`
  margin-bottom: 48px;
`;

const Grid = styled.ul`
  width: 100%;
  position: relative;
  transition: opacity 1s var(--cubic-easing), transform 1s var(--cubic-easing);
  transform: ${({ gridInView }) =>
    gridInView ? `translate3d(0, 0rem, 0)` : `translate3d(0, 6rem, 0)`};
  opacity: ${({ gridInView }) => (gridInView ? 1 : 0)};
  display: flex;
  flex-wrap: wrap;
`;

const GridItem = styled.li`
  position: relative;
  width: 100%;
  padding-bottom: 66%;
  background: ${({ hex }) => hex && hex};
  color: ${({ fontColor }) =>
    fontColor ? `var(--color-${fontColor})` : `var(--color-black-100)`};

  ${breakpoint(`small-desktop`)} {
    width: ${({ width }) => width && width};
    border: 1px solid var(--color-black-100);
    padding-bottom: 18vw;
  }
`;

const GridItemContent = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const CopyMenu = styled.div`
  display: none;
  transition: opacity var(--cubic-easing) 0.3s;
  opacity: ${({ show }) => (show ? `1` : `0`)};
  position: absolute;
  bottom: 20px;
  right: 20px;
  flex-direction: column;
  align-items: flex-end;

  ${breakpoint(`small-desktop`)} {
    display: flex;
    bottom: unset;
    top: 15px;
  }

  ${breakpoint(`desktop`)} {
    top: unset;
    bottom: 20px;
  }
`;

const CopyMenuMobile = styled.div`
  display: flex;
  opacity: 1;
  position: absolute;
  bottom: 20px;
  right: 20px;
  flex-direction: column;
  align-items: flex-end;

  ${breakpoint(`small-desktop`)} {
    display: none;
  }
`;

const CopyButton = styled.button`
  text-align: right;
  transition: 0.15s var(--cubic-easing) transform;
  &:hover {
    transform: translate3d(-0.3rem, 0, 0);
  }
`;

const CopyTitle = styled.p`
  text-align: right;
  margin-bottom: 0.125rem;
`;

const ColourGrid = ({ data: { title, backgroundColor, colours } }) => {
  const [ref, inView] = useInView();
  const [gridRef, gridInView] = useInView();

  const getWidth = (size) => {
    let width;

    switch (size) {
      case `s`:
        width = `20.66667%`;
        break;

      case `m`:
        width = `25%`;
        break;

      case `l`:
        width = `38%`;
        break;

      default:
        width = `66.66667%`;
        break;
    }

    return width;
  };

  const [activeColor, setActiveColor] = useState(null);
  const [copied, setCopied] = useState(null);

  useEffect(() => {
    setCopied(false);
  }, [activeColor]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCopied(false);
    }, 1500);

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [copied]);

  const onCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <SliceContainer backgroundColor={backgroundColor?.title}>
      <TitleWrapper ref={ref}>
        {title && inView && (
          <Scrambler className="b1" delay={10} iterations={8} text={title} />
        )}
      </TitleWrapper>

      <Grid gridInView={gridInView} ref={gridRef}>
        {colours?.map((colour) => {
          const width = getWidth(colour?.gridSize);

          return (
            <GridItem
              key={`${colour?.name}-${colour?.hex}`}
              hex={colour?.hex}
              fontColor={colour?.fontColor?.title}
              width={width}
              onMouseEnter={() => setActiveColor(colour?.name)}
              onMouseLeave={() => setActiveColor(null)}
            >
              <GridItemContent>
                <h3 className="b2">{colour?.name}</h3>

                <div>
                  <h3 className="b2">{colour?.hex}</h3>
                  <h3 className="b2">{colour?.rgb}</h3>
                </div>

                <CopyMenu show={colour?.name === activeColor}>
                  <CopyTitle>
                    <Scrambler
                      className="caption"
                      delay={3}
                      iterations={4}
                      text={
                        activeColor === colour?.name && copied
                          ? `Copied`
                          : `Copy`
                      }
                    />
                  </CopyTitle>
                  {colour?.name === activeColor && (
                    <>
                      <CopyButton
                        type="button"
                        onClick={() => onCopy(colour?.hex)}
                      >
                        <Scrambler
                          className="b2"
                          delay={3}
                          iterations={4}
                          text="Hex"
                        />
                      </CopyButton>

                      <CopyButton
                        type="button"
                        onClick={() => onCopy(colour?.rgb)}
                        onCopy={() => console.log(`copied`)}
                      >
                        <Scrambler
                          className="b2"
                          delay={3}
                          iterations={4}
                          text="RGB"
                        />
                      </CopyButton>
                    </>
                  )}
                </CopyMenu>

                <CopyMenuMobile>
                  <CopyTitle>
                    <Scrambler
                      className="caption"
                      delay={3}
                      iterations={4}
                      text={
                        activeColor === colour?.name && copied
                          ? `Copied`
                          : `Copy`
                      }
                    />
                  </CopyTitle>

                  <CopyButton type="button" onClick={() => onCopy(colour?.hex)}>
                    <Scrambler
                      className="b2"
                      delay={3}
                      iterations={4}
                      text="Hex"
                    />
                  </CopyButton>

                  <CopyButton
                    type="button"
                    onClick={() => onCopy(colour?.rgb)}
                    onCopy={() => console.log(`copied`)}
                  >
                    <Scrambler
                      className="b2"
                      delay={3}
                      iterations={4}
                      text="RGB"
                    />
                  </CopyButton>
                </CopyMenuMobile>
              </GridItemContent>
            </GridItem>
          );
        })}
      </Grid>
    </SliceContainer>
  );
};

export default ColourGrid;
