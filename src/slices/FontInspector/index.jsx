import React, { useEffect, useState } from "react";
import ContentEditable from "react-contenteditable";
import { useInView } from "react-intersection-observer";
import styled from "@emotion/styled";
import { Scrambler, SliceContainer } from "~components";
import { breakpoint } from "~utils/css";

const Header = styled.header`
  border-bottom: 1px solid #4f4f4f;
  padding-bottom: 48px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const HeaderLeft = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  ${breakpoint(`desktop`)} {
    justify-content: flex-start;
  }
`;

const VariantNameWrapper = styled.h3`
  display: inline-block;
  opacity: 0;
  position: relative;
  width: auto;
  transform: translate3d(0px, -1rem, 0px);
  animation: var(--animation-appear-down);
  animation-delay: ${({ delay }) => delay && `${delay * 73}ms`};
  animation-timing-function: 0.3s var(--cubic-easing) forwards;
  font-size: ${({ size }) => size && `${size}px`};
  font-family: ${({ family }) => family && family};
  letter-spacing: -0.01rem;
  line-height: 100%;
  word-break: break-word;
`;

const VariantText = styled((props) => <ContentEditable {...props} />)`
  color: #ffffff;
  transition: 0.15s ease opacity;
  opacity: ${({ hiding }) => (hiding ? 0 : 1)};

  &:read-write,
  &:read-write:hover,
  &:read-write:focus {
    outline: none;
  }
`;

const Properties = styled.div`
  display: flex;
  gap: 0.5rem;

  ${breakpoint(`desktop`, `max`)} {
    display: none;
  }
`;

const PropertiesTablet = styled.div`
  display: none;

  ${breakpoint(`desktop`, `max`)} {
    display: flex;
    opacity: 1;
    width: 100%;
    margin-top: 2.5rem;
    text-align: left;
  }
`;

const PropertyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 40%;

  ${breakpoint(`large-mobile`)} {
    width: 33.3333%;
  }
`;

const Property = styled.h4`
  width: 6.5rem;
  text-align: right;
  font-family: "FK Grotesk Regular";
  font-size: 12px;
  line-height: 120%;
  letter-spacing: 0.02em;

  ${breakpoint(`desktop`, `max`)} {
    text-align: left;
  }
`;

const HeaderRight = styled.div`
  display: none;

  ${breakpoint(`desktop`)} {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
  }
`;

const Heading = styled.h4`
  font-family: "FK Grotesk Monospaced";
  letter-spacing: 0.09em;
  text-transform: uppercase;
  width: 6rem;
  text-align: left;

  ${breakpoint(`desktop`)} {
    text-align: right;
  }
`;

const Variant = styled.div`
  width: 100%;
  padding-top: 2rem;
  padding-bottom: 1.5rem;
  margin-bottom: 6px;
  border-bottom: 1px solid #808080;
  color: #808080;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  &:hover {
    border-color: #ffffff;
    color: #ffffff;
  }

  transition: border-color 0.3s ease, color 0.3s ease;

  ${breakpoint(`desktop`)} {
    min-height: 83px;
    padding-top: 0;
    padding-bottom: 15px;
    flex-direction: row;
    align-items: flex-end;
  }
`;

const VariantNameContainer = styled.div`
  width: 100%;
  position: relative;
`;

const FontSelectors = styled.div`
  display: flex;
  align-items: center;

  ${breakpoint(`desktop`)} {
    margin-left: 3rem;
  }
`;

const FontSelector = styled.h4`
  opacity: ${({ active }) => (active ? 1 : 0.5)};
  margin-left: 0.25rem;
  margin-right: 0.25rem;
  padding: 0.5rem 0.25rem;

  ${breakpoint(`desktop`)} {
    padding: 0.5rem 0.25rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
`;

const FontInspector = ({ data: { title, backgroundColor, fontList } }) => {
  const { ref, inView } = useInView();

  const [activeFont, setActiveFont] = useState(fontList?.[0]);
  const [activeMode, setActiveMode] = useState(fontList?.[0]?.name);
  const [customText, setCustomText] = useState(``);
  const [isEditing, setIsEditing] = useState(false);
  const [mode, setMode] = useState(fontList?.[0]?.name);
  const [hiding, setHiding] = useState(false);
  const [redrawing, setRedrawing] = useState(false);

  useEffect(() => {
    setHiding(true);

    const timeout = setTimeout(() => {
      const selectedFont = fontList.find((font) => font.name === mode);

      setHiding(false);
      setActiveMode(mode);
      setActiveFont(selectedFont);
    }, 300);

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [mode]);

  useEffect(() => {
    if (hiding) {
      return () => {};
    }

    setRedrawing(true);

    const timeout = setTimeout(() => {
      setRedrawing(false);
    }, 150);

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [hiding]);

  const handleChange = (e) => {
    setCustomText(e.target.value);
  };

  return (
    <SliceContainer backgroundColor={backgroundColor}>
      {title && (
        <Header ref={ref}>
          <HeaderLeft>
            {inView && (
              <Scrambler
                className="b2"
                delay={10}
                iterations={8}
                text={title}
              />
            )}

            {fontList && (
              <FontSelectors>
                {fontList?.map((font) => (
                  <button type="button" onClick={() => setMode(font?.name)}>
                    <FontSelector
                      className="b2"
                      active={activeMode === font?.name}
                    >
                      {font?.key}
                    </FontSelector>
                  </button>
                ))}
              </FontSelectors>
            )}
          </HeaderLeft>

          <HeaderRight>
            <Heading className="caption">Line-Height</Heading>
            <Heading className="caption">Letter-Spacing</Heading>
          </HeaderRight>
        </Header>
      )}

      {activeFont?.fontVariants?.map((fontVariant, fontVariantIndex) => {
        const defaultText = `${activeFont?.name} ${fontVariant.size}`;
        return (
          <Variant>
            {(!redrawing && (
              <>
                <VariantNameContainer>
                  <VariantNameWrapper
                    family={activeMode}
                    size={fontVariant.size}
                    delay={fontVariantIndex}
                  >
                    <VariantText
                      html={customText.length > 0 ? customText : defaultText}
                      onFocus={() => setIsEditing(true)}
                      onBlur={() => setIsEditing(false)}
                      onChange={(e) => handleChange(e)}
                    />
                  </VariantNameWrapper>
                </VariantNameContainer>

                <PropertiesTablet>
                  <PropertyWrapper>
                    <Heading className="caption">Line-Height</Heading>
                    <Property>{`${fontVariant.lineHeight}`}</Property>
                  </PropertyWrapper>

                  <PropertyWrapper>
                    <Heading className="caption">Letter-Spacing</Heading>
                    <Property>{fontVariant.letterSpacing}</Property>
                  </PropertyWrapper>
                </PropertiesTablet>
              </>
            )) || <span />}

            <Properties>
              <Property>{`${fontVariant.size}/${fontVariant.lineHeight}`}</Property>
              <Property>{fontVariant.letterSpacing}</Property>
            </Properties>
          </Variant>
        );
      })}
    </SliceContainer>
  );
};

export default FontInspector;
