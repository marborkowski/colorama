import React from "react";
import * as Styled from "./styled";

export type ColorType = string;

export enum AnimationDirectionType {
  REVERSE = "reverse",
  NORMAL = "normal",
}

export enum AnimationType {
  LEFT = "left",
  RIGHT = "right",
  TOP = "top",
  BOTTOM = "bottom",
}

export interface ColoramaProps {
  colors?: ColorType[];
  bg?: boolean;
  text: string;
}

export const useColorama = () => {
  const ref = React.useRef<HTMLElement>(null);

  return {
    ref,
    play: (
      animationType: AnimationType,
      animationDirection: AnimationDirectionType
    ) => {
      ref.current?.play(animationType, animationDirection);
    },
  };
};

export const Colorama: React.FC<ColoramaProps> = React.forwardRef(
  ({ text, colors = Styled.DEFAULT_COLORS, bg }, ref) => {
    const [animate, setAnimate] = React.useState<boolean>(false);
    const [animationDirection, setAnimationDirection] =
      React.useState<AnimationDirectionType>(AnimationDirectionType.REVERSE);
    const [animationType, setAnimationType] = React.useState<AnimationType>(
      AnimationType.LEFT
    );
    const elements = text.split("");

    React.useImperativeHandle(ref, () => ({
      play(
        type: AnimationType,
        direction: AnimationDirectionType = AnimationDirectionType.NORMAL
      ) {
        setAnimate(true);
        setAnimationType(type);
        setAnimationDirection(direction);
      },
      ref,
    }));

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
