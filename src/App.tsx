import { useState, useEffect } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
// import CanvasLayout from "./components/CanvasLayout";
import CanvasPaintApp from "./components/CanvasPaintApp";
import CanvasToolbar from "./components/CanvasToolbar";
// import MyComponent from "./components/MyComponent";

function App() {
  // const [count, setCount] = useState(0);
  const [windowHeight, setWindowHeight] = useState<number>(window.innerHeight);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const [canvasWidth, setCanvasWidth] = useState<number>(windowHeight - 250);
  const [canvasHeight, setCanvasHeight] = useState<number>(400);

  useEffect(() => {
    // Function to update the dimensions whenever the window is resized
    const updateWindowDimensions = () => {
      setWindowHeight(window.innerHeight);
      setWindowWidth(window.innerWidth);
    };

    console.log(canvasHeight, canvasWidth)

    // Add event listener to update dimensions on window resize
    window.addEventListener("resize", updateWindowDimensions);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  // const handleClick = (toolName: any) => {
  //   return toolName;
  // };

  const handleCanvasSizeChange = (newWidth: number, newHeight: number) => {
    setCanvasWidth(newWidth);
    setCanvasHeight(newHeight);
  };

  return (
    <>
      <div className="w-screen h-screen bg-gradient-to-r from-sky-500 to-indigo-500 py-5">
        <header className="flex justify-center items-center pb-5">
          <h1 className="text-4xl font-bold text-white">
            React Canvas Paint App
          </h1>
          <p>
            Height: {windowHeight}, Width: {windowWidth}
          </p>
        </header>
        <div className="flex w-screen gap-2 justify-center items-center flex-1">
          <CanvasToolbar />
          <CanvasPaintApp width={windowHeight - 250} height={400} onChange={handleCanvasSizeChange}/>
        </div>
      </div>
    </>
  );
}

export default App;
