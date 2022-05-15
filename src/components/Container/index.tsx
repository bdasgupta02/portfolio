import React from "react";
import styled from "styled-components";
import Colors from "../tokens/colors";
import darkmodeSlice from "../../features/darkmode/darkmodeSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { animated, useSpring, config } from "react-spring";

const Bg = styled.div`
  width: 100%;
`;

type Props = {
  children: React.ReactNode;
  breakpoint?: "sm" | "md" | "lg";
};

// Add dark mode support with react spring for background linked to redux
const Container = ({ children, breakpoint = "md" }: Props) => {
  const isDarkmode = useSelector(
    (state: RootState) => state.darkmode.isDarkmode
  );

  const getBreakPoint = () => {
    switch (breakpoint) {
      case "sm":
        return "600px";
      case "md":
        return "900px";
      case "lg":
        return "1200px";
    }
  };

  const bgAnim = useSpring({
    backgroundColor: isDarkmode
      ? Colors.Neutral.Background
      : Colors.Neutral.AntiFlashWhite,
    config: config.stiff,
  });

  const Root = styled.div`
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    max-width: ${getBreakPoint()};
  `;

  const AnimatedBg = animated(Bg);

  return (
    <AnimatedBg style={bgAnim}>
      <Root>{children}</Root>
    </AnimatedBg>
  );
};

export default Container;
