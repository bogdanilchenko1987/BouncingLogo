import logo from "./assets/sticker.png";
import "./App.css";
import { useDimensions } from "./hooks/useDimensions";

function App() {
  const { top, left } = useDimensions();
  return (
    <>
      <div>
        <img
          src={logo}
          style={{ height: "200px", top, left }}
          className="container"
          alt="logo"
        />
      </div>
    </>
  );
}

export default App;
