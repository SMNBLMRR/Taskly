import React from "react";

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <>
      <main className="px-16 my-16 mt-32 flex justify-center items-center">
        <div className="w-1/2 m-auto">
          <div className="text-center">
            <h1 className="font-bold text-6xl">The best way to organize your work</h1>
            <h3 className="font-medium text-xl my-4 text-gray-500">A todo-list demo created entirely with Fastify and React</h3>
          </div>
          <div className="flex justify-center items-center">
            <button className="shadow-shadow-ligth px-4 bg-primary-button text-white py-1 rounded">
              <a href="/login">
                <span>Provalo Ora</span>
              </a>
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
