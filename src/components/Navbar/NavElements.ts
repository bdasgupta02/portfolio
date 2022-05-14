import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Colors from "../tokens/colors";
// change to 
export const Bar = styled.nav`
  position: fixed;
  background: ${Colors.Neutral.Background};
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  z-index: 10;
  overflow-x: auto;
`;

export const Left = styled.div`
  display: flex;
  padding-left: 400px;
  flex: 2;
`;

export const Right = styled.div`
  display: flex;
  padding-right: 400px;
  flex: 1;
`;

export const NavButton = styled(Link)``;
