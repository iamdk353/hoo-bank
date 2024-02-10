import { robot, discount, arrowUp } from "../assets/paths";
const Hero = () => {
  return (
    <div
      className="w-full h-[100vh] bg-gray-950 flex text-white flex-wrap"
      id="hero"
    >
      <div className=" w-[60%]  h-[80%] my-auto md:pl-20 sm:pl-5  flex flex-col relative justify-center space-y-4">
        <div className="flex items-center bg-slate-800 w-[42%] justify-center rounded-md">
          <img src={discount} alt="logo" className="mr-2" />
          <p>20% Discount For 1 Month Account</p>
        </div>
        <p className="font-semibold md:text-6xl md:leading-[90px] sm:text-5xl sm:leading-[40px]">
          THE NEXT<br></br> <span className="text-blue-300">GENERATION</span>
          <br></br>
          PAYAMENT METHOD{" "}
        </p>

        <p className="w-[60%] text-slate-400">
          Our Team Of Experts Uses A Methodology To Identify The Credit Cards
          Most Likely To Fit Your Needs We Examine Annual Percentage Rates
          ,Annual Fees
        </p>
      </div>
      <div className=" flex flex-1 justify-center items-center">
        <img src={robot} alt="img of robo" className="w-[80%]" />
      </div>
    </div>
  );
};
export default Hero;
