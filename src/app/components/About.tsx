import Image from "next/image";
import React from "react";
import HeroImg from "../../../public/assets/hero-img.png";

const About = () => {
  return (
    <div className="flex items-center justify-between max-w-[1100px] mx-auto mt-[10px] lg:mt-[60px] px-4">
      <div className="flex flex-col gap-y-6">
        <h1 className="text-5xl font-semibold">
          Привет, я парикмахер <span className="text-blue-700">Байыр</span>
        </h1>
        <div className="text-lg font-medium text-gray-700">
          <p>
            Адрес: <span>Абдрахманова</span> <span>142</span>
          </p>
          <p>
            Выходной день: <span>Воскресение</span>
          </p>
          <p>
            График работы: <span>От: 11:00 До 23:00</span>
          </p>
        </div>
      </div>
      <div>
        <Image src={HeroImg} alt="" className="hidden lg:block" />
      </div>
    </div>
  );
};

export default About;
