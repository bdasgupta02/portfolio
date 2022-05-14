import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
// Navbar
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AnimatedCursor from "./components/Cursor";
// Pages

// Add dark mode handling for cursor
function App() {
  return (
    <Router>
      <AnimatedCursor color="50, 50, 50" innerSize={8} outerSize={6} innerScale={0.7} outerScale={4} />
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
