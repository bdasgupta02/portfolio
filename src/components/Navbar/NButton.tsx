import React from "react";
import { useSelector } from "react-redux";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import { RootState } from "../../app/store";
import Clickable from "../Clickable";
import Colors, { percentageToHex } from "../tokens/colors";

const NavLinkLight = styled(Link)`
  padding: 0px 10px 0px 10px;
  font-size: 16px;
  text-decoration: none;
  color: ${Colors.Secondary.QueenBlue}${percentageToHex(80)};
  height: 39px;
  display: flex;
  align-items: center;
  outline: 0px solid #c2c2c252;

  -webkit-transition: all 200ms ease-out;
  -moz-transition: all 200ms ease-out;
  -o-transition: all 200ms ease-out;
  -ms-transition: all 200ms ease-out;
  transition: all 200ms ease-out;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:hover {
    box-shadow: 5px 8px 20px ${Colors.Secondary.QueenBlue}${percentageToHex(5)};
    background-color: ${Colors.Secondary.QueenBlue}${percentageToHex(15)};
    outline: 3px solid ${Colors.Secondary.QueenBlue}${percentageToHex(10)};
    outline-offset: -3px;
  }

  &.active {
    box-shadow: 5px 8px 20px ${Colors.Secondary.QueenBlue}${percentageToHex(10)};
    background-color: ${Colors.Secondary.QueenBlue}${percentageToHex(20)};
    outline: 3px solid ${Colors.Secondary.QueenBlue}${percentageToHex(10)};
    outline-offset: -3px;
    font-weight: bold;
    color: #666666;
  }
`;

const NavLinkDark = styled(Link)`
  padding: 0px 10px 0px 10px;
  font-size: 16px;
  text-decoration: none;
  color: ${Colors.Primary}${percentageToHex(50)};
  height: 39px;
  display: flex;
  align-items: center;
  outline: 0px solid #c2c2c252;

  -webkit-transition: all 200ms ease-out;
  -moz-transition: all 200ms ease-out;
  -o-transition: all 200ms ease-out;
  -ms-transition: all 200ms ease-out;
  transition: all 200ms ease-out;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:hover {
    box-shadow: 5px 8px 20px ${Colors.Primary}${percentageToHex(5)};
    background-color: ${Colors.Primary}${percentageToHex(15)};
    outline: 3px solid ${Colors.Primary}${percentageToHex(10)};
    outline-offset: -3px;
  }

  &.active {
    box-shadow: 5px 8px 20px ${Colors.Primary}${percentageToHex(10)};
    background-color: ${Colors.Primary}${percentageToHex(20)};
    outline: 3px solid ${Colors.Primary}${percentageToHex(10)};
    outline-offset: -3px;
    font-weight: bold;
    color: ${Colors.Primary};
  }
`;

type Props = {
  children: string;
  to: string;
};

const NButton = ({ children, to }: Props) => {
  const isDarkmode: boolean = useSelector(
    (state: RootState) => state.darkmode.isDarkmode
  );

  const NavLink = isDarkmode ? NavLinkDark : NavLinkLight;

  return (
    <Clickable>
      <NavLink end to={to ?? "/"}>
        <div style={{ display: "inline-block" }}>{children}</div>
      </NavLink>
    </Clickable>
  );
};

export default NButton;
