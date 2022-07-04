import Image from "next/image";
import bannerImage from "../public/assets/images/banner-image.jpg";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");

  return (
    <div className="py-28 ">
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 justify-between items-center">
        <div className="text-center md:w-1/2 order-last ">
          <p className="md:mt-16 mb-2 text-5xl font-bold tracking-tight text-green-500 drop-shadow-lg sm:text-5xl md:text-7xl lg:text-8xl">
            Quiz Tank
          </p>
          <h2 className="text-gray-600 font-bold tracking-wide text-base sm:text-lg md:text-xl lg:text-2xl">
            Develop your General Knowledge
          </h2>
          <p className="mt-8 max-w-2xl text-xl text-gray-400 md:mx-auto">
            Enter your name to start a quiz
          </p>
          <div className="py-3">
            <input
              onChange={(event) => {
                setName(event.target.value || "");
              }}
              value={name}
              className="w-68 h-12 shadow-green-500 px-4 rounded-sm border-2 ring-offset-0 ring-0 outline-0 text-center text-xl text-gray-700 font-semibold"
              type="text"
              name="admin_name"
              id="admin_name"
              placeholder="Enter Your Name"
            />
          </div>
        </div>

        <div className="w-1/2 max-w-[34rem] item-center justify-center mx-auto md:order-last">
          <div className="">
            <Image className="" src={bannerImage} alt="banner image" />
          </div>
        </div>
      </div>
    </div>
  );
}
