import React from "react";
import Header from "../../ui/molecules/Header";
import Hero from "../../ui/atoms/Hero";
import "./index.css";
interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <Header />
      <Hero />
      <div>
        <img src="/assets/app2.png" alt="init page" className="w-4/5 rounded m-auto h-full mb-[20vh] image-shadow" />
      </div>
    </>
  );
};

export default Home;
