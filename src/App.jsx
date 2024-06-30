import "./App.css";
import Portfolio from "./Portfolio";
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <>
      {window.innerWidth > 700 && (
        <AnimatedCursor
          innerSize={15}
          outerSize={25}
          color="168, 85, 247"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
          ]}
        />
      )}
      <Portfolio />
    </>
  );
}

export default App;
