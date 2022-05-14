import React, { useState } from 'react'
import styled from 'styled-components';

const NavButton = () => {
  const [isHover, setHover] = useState(false);
  const [isPress, setPress] = useState(false);

  const OuterDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px;
  `;

  return (
    <OuterDiv>NavButton</OuterDiv>
  )
}

export default NavButton