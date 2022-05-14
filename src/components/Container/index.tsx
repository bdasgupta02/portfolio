import React from "react";
import styled from "styled-components";
import Colors from "../tokens/colors";

type Props = {
  children: React.ReactNode;
  breakPoint?: string;
};

const Container = ({ children, breakPoint = "1000px" }: Props) => {
  const Bg = styled.div`
    width: 100%;
    background-color: ${Colors.Neutral.Background};
  `;

  const Root = styled.div`
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    max-width: ${breakPoint};
  `;

  return (
    <Bg>
      <Root>{children}</Root>
    </Bg>
  );
};

export default Container;
