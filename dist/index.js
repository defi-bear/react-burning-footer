import React from "react";
import "./index.scss";

function App() {
  return /*#__PURE__*/React.createElement("div", {
    className: "main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bubbles"
  }, new Array(128).fill(0).map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "bubble",
    style: {
      size: `${2 + Math.random() * 4}rem`,
      "--distance": `${6 + Math.random() * 4}rem`,
      "--position": `${-5 + Math.random() * 110}%`,
      "--time": `${2 + Math.random() * 2}s`,
      "--delay": `${-1 * (2 + Math.random() * 2)}s`
    }
  })))), /*#__PURE__*/React.createElement("svg", {
    style: {
      position: "fixed",
      top: "100vh"
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("filter", {
    id: "blob"
  }, /*#__PURE__*/React.createElement("feGaussianBlur", {
    in: "SourceGraphic",
    stdDeviation: "10",
    result: "blur"
  }), /*#__PURE__*/React.createElement("feColorMatrix", {
    in: "blur",
    mode: "matrix",
    values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9",
    result: "blob"
  }), /*#__PURE__*/React.createElement("feComposite", {
    in: "SourceGraphic",
    in2: "blob",
    operator: "atop"
  })))));
}

export default App;