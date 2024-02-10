import { logo, instagram } from "../assets/paths";
import { links, IocnsPaths } from "../assets/constants";
import { Links, Icons } from "./paths";
const Footer = () => {
  return (
    <div className="w-full h-[60vh] bg-black opacity-[95] flex flex-col items-center justify-center">
      <div className=" w-[80%] mx-auto h-[80%] flex justify-between border-b-gray-50 border-b items-center">
        <div className="">
          <img src={logo} alt="logo" className="w-[30vh] mb-[5vh]" />
          <p className="text-base text-gray-500 w-[60%]">
            A new way to make the payments easy reliable and secure.
          </p>
        </div>
        <Links heading="UseFull Links" content={links[0]} />
        <Links heading="Community" content={links[1]} />
        <Links heading="Partners" content={links[2]} />
      </div>
      <div className="flex w-[90%] justify-between px-32 items-center h-[10vh]">
        <p className="text-gray-400">
          copyright &#169; {new Date().getFullYear()} HooBank. All rights
          reserved
        </p>
        <div className="flex space-x-5">
          {IocnsPaths.map((i, id) => (
            <Icons img={i} key={id} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Footer;
