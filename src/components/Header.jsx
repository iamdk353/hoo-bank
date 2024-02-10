import { Nav } from "./paths";
import { logo, menu, close } from "../assets/paths";
import { useState } from "react";
const Header = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="bg-black w-full h-[10vh] flex justify-between px-8 items-center py-2 bg-gradient-to-bl from-gray-900 to-gray-950 delay-150">
      <a href="#">
        <img src={logo} alt="logo" className="w-32" />
      </a>
      <Nav />
      <div
        className="block lg:hidden"
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        <img src={open ? menu : close} alt="" />
      </div>
    </div>
  );
};
export default Header;
