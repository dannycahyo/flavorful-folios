import Image from "next/image";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Heroes = () => {
  return (
    <div className="relative h-[400px] md:h-[600px] xl:h-[700px]">
      <Image
        src="/assets/images/Food_Ingredients.jpg"
        alt="Food Ingredients"
        fill
        objectFit="cover"
        className="filter contrast-125 brightness-75"
      />
      <div className="absolute w-11/12 md:w-auto top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center">
        <h2
          className={`text-sm lg:text-xl xl:text-2xl font-bold text-white mb-4 ${inter.className}`}
        >
          Catering should be an experience
        </h2>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white">
          We use only the finest and freshest ingredients
        </h1>
        <p className="mt-4 text-sm lg:text-xl xl:text-2xl text-white">
          At Sway catering we know that food is an important part of life. If
          the meals is not perfect, your event cannot be perfect.
        </p>
        <button className="mt-8 px-2 md:px-4 py-2 md:py-3 bg-green-500 text-white text-sm md:text-xl rounded-xl">
          Request a Quote
        </button>
      </div>
      <div className="hidden md:block absolute bottom-0 left-0 w-full h-1/3">
        <Image
          src="/assets/icons/White_Wave.svg"
          alt="Left White Wave"
          fill
          objectFit="cover"
        />
      </div>
      <div className="block md:hidden absolute bottom-0 left-0 w-full h-1/3">
        <Image
          src="/assets/icons/White_Wave_Mobile.svg"
          alt="Left White Wave"
          fill
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export { Heroes };
