import React from "react";
import "./index.css";
interface LoaderProps {}

const Loader: React.FC<LoaderProps> = () => {
  return (
    <div className="w-full h-screen overflow-hidden flex justify-center items-center m-auto">
      <div className="loading-spinner"></div>
    </div>
  );
};

export default Loader;
