import React from "react";
import styled from "styled-components";
import Clickable from "../Clickable";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import Colors, { percentageToHex } from "../tokens/colors";
import { useAppDispatch } from "../../app/hooks";
import { toggleDarkmode } from "../../features/darkmode/darkmodeSlice";

const CircularRoot = styled.div`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CircularLight = styled(CircularRoot)`
  box-shadow: 5px 8px 20px ${Colors.Primary}${percentageToHex(10)};
  background-color: ${Colors.Primary}${percentageToHex(20)};
  outline: 3px solid ${Colors.Primary}${percentageToHex(10)};
`;

const CircularDark = styled(CircularRoot)`
  box-shadow: 5px 8px 20px ${Colors.Secondary.QueenBlue}${percentageToHex(10)};
  background-color: ${Colors.Secondary.QueenBlue}${percentageToHex(20)};
  outline: 3px solid ${Colors.Secondary.QueenBlue}${percentageToHex(10)};
`;

const DarkmodeSwitch = () => {
  const dispatch = useAppDispatch();
  const isDarkmode: boolean = useSelector(
    (state: RootState) => state.darkmode.isDarkmode
  );

  // change from ternary
  return (
    <Clickable>
      {isDarkmode ? (
        <CircularLight onClick={() => dispatch(toggleDarkmode())}>
          <BsFillMoonStarsFill size={"17px"} color={Colors.Primary} />
        </CircularLight>
      ) : (
        <CircularDark onClick={() => dispatch(toggleDarkmode())}>
          <BsFillSunFill
            size={"19px"}
            color={`${Colors.Secondary.QueenBlue}${percentageToHex(80)}`}
          />
        </CircularDark>
      )}
    </Clickable>
  );
};

export default DarkmodeSwitch;
