import logo from "./assets/sticker.png";
import "./App.css";
import { useDimensions } from "./hooks/useDimensions";
import { useState } from "react";

function App() {
  const { top, left } = useDimensions();
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <div>
        <img
          src={logo}
          style={{
            height: "200px",
            top,
            left,
            // transform: `rotate(${rotate}turn)`,
          }}
          alt="logo"
          className={`container ${clicked && "rotate"}`}
          onClick={() => setClicked(!clicked)}
        />
      </div>
    </>
  );
}

export default App;
