import { quotes } from "../assets/paths";

const UserCard = ({ content, img, name, position }) => {
  return (
    <div className="p-10 flex flex-col justify-evenly hover:bg-slate-900 rounded-lg delay-250 sm:p-4">
      <img src={quotes} alt="" className="w-[52px] sm:w-[40px] sm:mt-2" />
      <p>{content}</p>
      <div className="flex ">
        <img src={img} className=" w-[42px] h-[42px]" />
        <div className="ml-3">
          <p>{name}</p>
          <p className="text-xs text-gray-400 font-semibold">{position}</p>
        </div>
      </div>
    </div>
  );
};
export default UserCard;
