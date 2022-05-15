import React, { useState } from "react";
import { config, useTransition, animated } from "react-spring";
import Container from "../Container";
import { Switch } from "@mui/material";
import DarkmodeSwitch from "../DarkmodeSwitch";
import styled from "styled-components";
import NButton from "./NButton";

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
  background-color: white;
  z-index: 2;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Navbar = () => {
  const [anim, setAnim] = useState([1]);

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

  return (
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
              <NButton to="/projects">Projects</NButton>
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
              <NButton to="/resume">Resume</NButton>
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
              <NButton to="/blog">Blog</NButton>
            </animated.div>
          ))}
          {anim4(({ opacity }) => (
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
          {anim5(({ opacity }) => (
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
  );
};

/**
<div
      style={{
        position: "fixed",
        backgroundColor: "white",
        zIndex: 2,
        width: "100%",
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div>
        test
      </div>
    </div>
 */

export default Navbar;
