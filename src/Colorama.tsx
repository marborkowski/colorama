import React from "react";
import * as Styled from "./styled";
import { AnimationDirectionType, AnimationType, ColoramaProps } from "./types";

export const Colorama: React.FC<ColoramaProps> = React.forwardRef(
  (
    {
      text,
      colors = Styled.DEFAULT_COLORS,
      bg,
      animate = false,
      animationDirection = AnimationDirectionType.REVERSE,
      animationType = AnimationType.LEFT,
    },
    ref
  ) => {
    const elements = text.split("");

    return (
      <Styled.Wrapper colors={colors} bg={bg} ref={ref}>
        <Styled.Overflow
          animate={animate}
          length={elements.length}
          animationDirection={animationDirection}
          animationType={animationType}
        >
          {elements.map((letter, index) => {
            return (
              <span className="colorama" key={`${letter}-${index}`}>
                {letter === " " ? <>&nbsp;</> : letter}
              </span>
            );
          })}
        </Styled.Overflow>
      </Styled.Wrapper>
    );
  }
);
