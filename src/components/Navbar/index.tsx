import React from "react";
import Container from "../Container";
import * as NavElements from "./NavElements";

/**
 * - Light/dark mode switcher
 */
const Navbar = () => {
  return (
    <div
      style={{
        position: "sticky",
        top: "0px",
        backgroundColor: "white",
        zIndex: 2,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container>
        <div style={{ color: "white" }}>test</div>
      </Container>
    </div>
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
