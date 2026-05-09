import React from "react";
import heroImg from "../../assets/hero_vacation_sunset.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative ">
      <img
        src={heroImg}
        alt="Hero Image"
        className="w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover"
      />
      <div className="absolute inset-0 bg-opacity-5 bg-black flex items-center justify-center">
        <div className="text-center text-white p-6">
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter uppercase mb-4">
        
            VACATION
            <br />
            Ready
          </h1>
          <p className="text-sm tracking-tighter md:text-lg mb-6 text-red-600">
            Explore the world with us. Unforgettable experiences await.
          </p>
          <Link to="/collections/all" className="bg-white text-gray-950 px-6 py-2 rounded-sm text-lg"> Shop Now</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
