import Image from "next/image";
import mainImage from "../public/assets/images/bi1.png";

export default function HomeText() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="text-center">
          <p className="2xl:mt-16 mb-2 text-5xl leading-10 font-bold tracking-tight text-indigo-900 sm:text-8xl ">
            Quiz Tank
          </p>
          <h2 className="text-3xl text-gray-600 font-bold tracking-wide">Develop your GK</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto md:mx-auto">Lorem Ipsum.</p>
        </div>

        <div className="max-w-4xl justify-self-center flex-initial item-center justify-center lg:mx-auto md:mx-auto ">
          <div className="">
            <Image className="" src={mainImage} alt="banner image" />
          </div>
        </div>
      </div>
    </div>
  );
}
