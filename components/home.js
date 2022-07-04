import Image from "next/image";
import bannerImage from "../public/assets/images/banner-image.jpg";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");

  return (
    <div className="py-28 ">
      <div className="flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 justify-between items-center">
        <div className="text-center w-1/2">
          <p className="2xl:mt-16 mb-2 text-5xl leading-10 font-bold tracking-tight text-green-500 drop-shadow-lg sm:text-8xl ">
            Quiz Tank
          </p>
          <h2 className="text-2xl text-gray-600 font-bold tracking-wide">
            Develop your General Knowledge
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto md:mx-auto">
            Enter your name to start a quiz
          </p>
          <div className="p-10">
            <input
              onChange={(event) => {
                setName(event.target.value || "");
              }}
              value={name}
              className="w-68 h-12 shadow-green-500 p-4 rounded-sm border-2 ring-offset-0 ring-0 outline-0 text-center text-xl text-gray-700 font-semibold"
              type="text"
              name="admin_name"
              id="admin_name"
              placeholder="Enter Your Name"
            />
          </div>
        </div>

        <div className="w-1/2 max-w-[34rem] item-center justify-center mx-auto ">
          <div className="">
            <Image className="" src={bannerImage} alt="banner image" />
          </div>
        </div>
      </div>
    </div>
  );
}
