import React, { useEffect, useState } from 'react';

const MyComponent: React.FC = () => {
  const [windowHeight, setWindowHeight] = useState<number>(window.innerHeight);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    // Function to update the dimensions whenever the window is resized
    const updateWindowDimensions = () => {
      setWindowHeight(window.innerHeight);
      setWindowWidth(window.innerWidth);
    };

    // Add event listener to update dimensions on window resize
    window.addEventListener('resize', updateWindowDimensions);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateWindowDimensions);
    };
  }, []);

  return (
    <div>
      <p>Window Height: {windowHeight}</p>
      <p>Window Width: {windowWidth}</p>
    </div>
  );
};

export default MyComponent;
