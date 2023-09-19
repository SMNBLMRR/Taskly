import React from "react";
import Header from "../../ui/molecules/Header";

interface Error404Props {}

const Error404: React.FC<Error404Props> = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col w-full h-screen justify-center items-center">
        <h1 className="text-6xl">
          <strong>404</strong> Page not Found
        </h1>
      </div>
    </>
  );
};

export default Error404;
