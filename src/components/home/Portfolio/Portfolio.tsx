import { IconType } from "react-icons";

import { portfolios } from "@src/constants";

const Portfolio = () => {
  const renderIcon = (IconName: IconType) => {
    return <IconName className="w-8 h-8 text-[#AA8690]" />;
  };

  return (
    <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 bg-[#312729]">
      <div className="flex items-center justify-center w-auto lg:w-2/3 2xl:w-1/2 h-20 lg:h-[600px] xl:h-[520px] bg-[#404040] text-white">
        <h1 className="text-2xl md:text-3xl lg:text-2xl">My Portfolio</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-auto h-auto xl:w-full lg:h-full">
        {portfolios.map((portfolio) => (
          <div key={portfolio.title} className="bg-[#382E35] py-4 px-8 lg:px-4">
            {renderIcon(portfolio.iconName)}
            <h2 className="text-xl mt-6 text-rose-100 font-bold">
              {portfolio.title}
            </h2>
            <p className="mt-2 text-sm text-rose-300">
              {portfolio.description}
            </p>
          </div>
        ))}
      </div>
      <div className="p-4">
        <div className="flex flex-col space-y-4 text-rose-300">
          <h2 className="text-2xl text-rose-100 mt-2 lg:mt-6">Services</h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            tristique placerat in massa consectetur quisque nunc fames.
          </p>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            tristique placerat in massa consectetur quisque. Nunc ac fames
            lectus in libero aliquet.
          </p>
          <p className="text-sm">
            Faucibus sed tristique fames sed aliquet ultricies eget viverra
            arcu. Vitae faucibus diam consequat mascenas. Turpis metus sit diam
            purus leo in varius ac quam. Nunc amet tristique volutpat adipiscing
            vulputate phasellus. Volutpat faucibus
          </p>
        </div>
        <div className="flex space-x-2 mt-12">
          <button className="px-4 py-2 border border-[#F67C82] text-white rounded-3xl">
            Download CV
          </button>
          <button className="px-4 py-2 border border-[#F67C82] text-white rounded-3xl">
            Check My Portfolio
          </button>
        </div>
      </div>
    </div>
  );
};

export { Portfolio };
