import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
// Navbar
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AnimatedCursor from "./components/Cursor";
// Pages

// Add dark mode handling for cursor 17, 28, 38 for light and 255, 255, 255 for dark (make lighter and darker respectively)
/**
 * Ideas:
 * - filters for projects page (link from home page directly to filters eg. I am a <link to projects with filter>, <> ..)
 */
function App() {
  return (
    <Router>
      <AnimatedCursor innerSize={8} outerSize={8} innerScale={0.7} outerScale={4} />
      <Navbar />
      <div style={{ overflowY: "auto" }}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <Counter />
                  <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                  </p>
                  <span>
                    <span>Learn </span>
                    <a
                      className="App-link"
                      href="https://reactjs.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      React
                    </a>
                    <span>, </span>
                    <a
                      className="App-link"
                      href="https://redux.js.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Redux
                    </a>
                    <span>, </span>
                    <a
                      className="App-link"
                      href="https://redux-toolkit.js.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Redux Toolkit
                    </a>
                    ,<span> and </span>
                    <a
                      className="App-link"
                      href="https://react-redux.js.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      React Redux
                    </a>
                  </span>
                </header>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
