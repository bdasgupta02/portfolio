import React from "react";
import styled from "styled-components";
import Clickable from "../Clickable";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import Colors from "../tokens/colors";
import { useAppDispatch } from "../../app/hooks";
import { toggleDarkmode } from "../../features/darkmode/darkmodeSlice";

const CircularRoot = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CircularLight = styled(CircularRoot)`
  background-color: ${Colors.Neutral.AntiFlashWhite};
`;

const CircularDark = styled(CircularRoot)`
  background-color: ${Colors.Neutral.Background};
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
          <BsFillMoonStarsFill
            size={"15px"}
            color={Colors.Neutral.Background}
          />
        </CircularLight>
      ) : (
        <CircularDark onClick={() => dispatch(toggleDarkmode())}>
          <BsFillSunFill size={"17px"} color={Colors.Neutral.AntiFlashWhite} />
        </CircularDark>
      )}
    </Clickable>
  );
};

export default DarkmodeSwitch;
