import React from "react";
import styled from "styled-components";
import Colors from "../tokens/colors";

type Props = {
  children: React.ReactNode;
  breakpoint?: string;
};

const Container = ({ children, breakpoint = "md" }: Props) => {
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

  const Bg = styled.div`
    width: 100%;
    background-color: ${Colors.Neutral.Background};
  `;

  const Root = styled.div`
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    max-width: ${getBreakPoint()};
  `;

  return (
    <Bg>
      <Root>{children}</Root>
    </Bg>
  );
};

export default Container;
