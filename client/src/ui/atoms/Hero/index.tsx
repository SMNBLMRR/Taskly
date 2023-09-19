import React from "react";

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <>
      <main className="px-16 my-16 mt-32 flex justify-center items-center">
        <div className="w-1/2 m-auto">
          <div className="text-center">
            <h1 className="font-bold text-6xl">Il modo migliore per organizzare il tuo Lavoro</h1>
            <h3 className="font-medium text-xl my-4 text-gray-500">Una demo todolist realizzata interamente con Fastify e React</h3>
          </div>
          <div className="flex justify-center items-center">
            <button className="shadow-shadow-ligth px-4 bg-primary-button text-white py-1 rounded">
              <span>Provalo Ora</span>
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
