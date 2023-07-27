import React from "react";

const CanvasLayout = () => {
  return (
    <main className="">
      <div className="flex h-screen">
        {/* Left Sidebar */}
        <div className="w-1/5 bg-gray-200">
          {/* Add your sidebar content here */}
        </div>

        {/* Right Canvas */}
        <div className="flex-1 bg-gray-400">
          {/* Add your canvas content here */}
        </div>
      </div>
    </main>
  );
};

export default CanvasLayout;
