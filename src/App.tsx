import logo from "./assets/sticker.png";
import "./App.css";
import { useDimensions } from "./hooks/useDimensions";

function App() {
  const { top, left, rotate } = useDimensions();

  return (
    <>
      <div className="app">
        <img
          src={logo}
          style={{
            height: "200px",
            top,
            left,
            transform: `rotate(${rotate}turn)`,
          }}
          alt="logo"
          className="container"
        />
      </div>
    </>
  );
}

export default App;

// click to infinite rotate

// import logo from "./assets/sticker.png";
// import "./App.css";
// import { useDimensions } from "./hooks/useDimensions";
// import { useState } from "react";

// function App() {
//   const { top, left } = useDimensions();
//   const [clicked, setClicked] = useState(false);
//   const [text, setText] = useState(true);

//   setInterval(() => {
//     setText(false);
//   }, 3000);

//   return (
//     <>
//       <span className={`${text ? "white" : "black"}`}>
//         Click on me to infinite rotate
//       </span>
//       <div>
//         <img
//           src={logo}
//           style={{
//             height: "200px",
//             top,
//             left,

//           }}
//           alt="logo"
//           className={`container ${clicked && "rotate"}`}
//           onClick={() => setClicked(!clicked)}
//         />
//       </div>
//     </>
//   );
// }

// export default App;
