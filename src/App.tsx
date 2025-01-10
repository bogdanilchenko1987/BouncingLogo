import logo from "./assets/sticker.png";
import "./App.css";
import { useDimensions } from "./hooks/useDimensions";

function App() {
  const { top, left, rotate } = useDimensions();
  return (
    <>
      <div>
        <img
          src={logo}
          style={{
            height: "200px",
            top,
            left,
            transform: `rotate(${rotate}turn)`,
          }}
          className="container"
          alt="logo"
        />
      </div>
    </>
  );
}

export default App;
