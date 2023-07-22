import {
  BsChatLeft,
  BsBrowserChrome,
  BsFileEarmarkText,
  BsCameraVideo,
  BsPeople,
  BsCart,
} from "react-icons/bs";

const VerticalMenuIcon = () => {
  return (
    <div className="flex flex-col items-center w-8 bg-white">
      <div className="p-2 text-gray-500 border border-gray-300">
        <BsChatLeft />
      </div>
      <div className="p-2 text-gray-500 border border-gray-300">
        <BsBrowserChrome />
      </div>
      <div className="p-2 text-gray-500 border border-gray-300">
        <BsFileEarmarkText />
      </div>
      <div className="p-2 text-gray-500 border border-gray-300">
        <BsCameraVideo />
      </div>
      <div className="p-2 text-gray-500 border border-gray-300">
        <BsPeople />
      </div>
      <div className="p-2 text-gray-500 border border-gray-300">
        <BsCart />
      </div>
    </div>
  );
};

export { VerticalMenuIcon };
