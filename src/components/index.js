import React from "react";
import "./index.scss";

function BurningFooter({ height, backgroundColor, children }) {
  return (
    <div className="main">
      <div
        className="footer"
        style={{ minHeight: height, "--footer-background": backgroundColor }}
      >
        <div className="bubbles">
          {new Array(128).fill(0).map((_, i) => (
            <div
              key={i}
              className="bubble"
              style={{
                size: `${2 + Math.random() * 4}rem`,
                "--distance": `${6 + Math.random() * 4}rem`,
                "--position": `${-5 + Math.random() * 110}%`,
                "--time": `${2 + Math.random() * 2}s`,
                "--delay": `${-1 * (2 + Math.random() * 2)}s`,
              }}
            />
          ))}
        </div>
        <div className="children">{children}</div>
      </div>
      <svg
        style={{
          position: "fixed",
          top: "100vh",
        }}
      >
        <defs>
          <filter id="blob">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            ></feGaussianBlur>
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="blob"
            ></feColorMatrix>
            <feComposite
              in="SourceGraphic"
              in2="blob"
              operator="atop"
            ></feComposite>
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default BurningFooter;
