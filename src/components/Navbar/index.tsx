import React, { useState } from "react";
import { config, useTransition, animated } from "react-spring";
import Container from "../Container";
import { ThreeBarsIcon } from "@primer/octicons-react";
import {
  Grid,
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  Divider,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import DarkmodeSwitch from "../DarkmodeSwitch";
import styled from "styled-components";
import NButton from "./NButton";
import { useNavigate } from "react-router-dom";
import Colors from "../tokens/colors";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

/**
 * TODO:
 * - Logo on left
 *
 * Tabs:
 * - Projects
 * - Resume
 * - Blog
 * - Contact
 */

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
`;

const Outer = styled.div`
  position: sticky;
  top: 0px;
  z-index: 2;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Navbar = () => {
  const [anim, setAnim] = useState([1]);

  const isDarkmode = useSelector(
    (state: RootState) => state.darkmode.isDarkmode
  );

  const anim1 = useTransition(anim, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    delay: 0,
    config: config.gentle,
  });

  const anim2 = useTransition(anim, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    delay: 100,
    config: config.gentle,
  });

  const anim3 = useTransition(anim, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    delay: 200,
    config: config.gentle,
  });

  const anim4 = useTransition(anim, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    delay: 300,
    config: config.gentle,
  });

  const anim5 = useTransition(anim, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    delay: 400,
    config: config.gentle,
  });

  const anim6 = useTransition(anim, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    delay: 500,
    config: config.gentle,
  });

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();
  const goToPage = (page: string) => {
    handleClose();
    navigate(page);
  };

  return isDesktop ? (
    <Outer>
      <Container breakpoint="lg">
        <Row>
          {anim1(({ opacity }) => (
            <animated.div
              style={{
                opacity: opacity,
                transform: opacity.to(
                  (y) => `translate3d(0,${(y - 1) * 5}px,0)`
                ),
                marginRight: "26px",
              }}
            >
              <NButton to="/projects">Home</NButton>
            </animated.div>
          ))}
          {anim2(({ opacity }) => (
            <animated.div
              style={{
                opacity: opacity,
                transform: opacity.to(
                  (y) => `translate3d(0,${(y - 1) * 5}px,0)`
                ),
                marginRight: "26px",
              }}
            >
              <NButton to="/projects">Projects</NButton>
            </animated.div>
          ))}
          {anim3(({ opacity }) => (
            <animated.div
              style={{
                opacity: opacity,
                transform: opacity.to(
                  (y) => `translate3d(0,${(y - 1) * 5}px,0)`
                ),
                marginRight: "26px",
              }}
            >
              <NButton to="/resume">Resume</NButton>
            </animated.div>
          ))}
          {anim4(({ opacity }) => (
            <animated.div
              style={{
                opacity: opacity,
                transform: opacity.to(
                  (y) => `translate3d(0,${(y - 1) * 5}px,0)`
                ),
                marginRight: "26px",
              }}
            >
              <NButton to="/blog">Blog</NButton>
            </animated.div>
          ))}
          {anim5(({ opacity }) => (
            <animated.div
              style={{
                opacity: opacity,
                transform: opacity.to(
                  (y) => `translate3d(0,${(y - 1) * 5}px,0)`
                ),
              }}
            >
              <NButton to="/contact">Contact</NButton>
            </animated.div>
          ))}
          <div style={{ flex: 1 }} />
          {anim6(({ opacity }) => (
            <animated.div
              style={{
                opacity: opacity,
                transform: opacity.to(
                  (y) => `translate3d(0,${(y - 1) * 5}px,0)`
                ),
              }}
            >
              <DarkmodeSwitch />
            </animated.div>
          ))}
        </Row>
      </Container>
    </Outer>
  ) : (
    <div>
      <AppBar>
        <Toolbar
          sx={{
            backgroundColor: isDarkmode
              ? Colors.Neutral.Background
              : Colors.Neutral.AntiFlashWhite,
          }}
        >
          <IconButton
            id="mobile-menu"
            sx={{
              color: isDarkmode
                ? Colors.Neutral.AntiFlashWhite
                : Colors.Neutral.Background,
            }}
            onClick={handleClick}
          >
            <ThreeBarsIcon />
          </IconButton>

          <Menu
            id="mobile-menu"
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem onClick={() => goToPage("/")}>&nbsp;&nbsp;Home</MenuItem>
            <MenuItem onClick={() => goToPage("/assignment/1")}>
              &nbsp;&nbsp;Projects
            </MenuItem>
            <MenuItem onClick={() => goToPage("/assignment/2")}>
              &nbsp;&nbsp;Resume
            </MenuItem>
            <MenuItem onClick={() => goToPage("/assignment/3")}>
              &nbsp;&nbsp;Blog
            </MenuItem>
            <MenuItem onClick={() => goToPage("/assignment/3")}>
              &nbsp;&nbsp;Contact
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
