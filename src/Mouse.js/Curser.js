import React from "react";
import AnimatedCursor from "react-animated-cursor";

export default function Cursor() {
  return (
    <div className="App">
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        outerStyle={{
          border: "3px solid white",
        }}
        innerStyle={{
          backgroundColor: "white",
        }}
      />
    </div>
  );
}
