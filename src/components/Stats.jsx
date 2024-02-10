import { Stat, features } from "../assets/constants";
import LeftSect from "./LeftSect";

const Stats = () => {
  return (
    <section className="w-full h-[100vh] bg-gray-950" id="AboutUs">
      <div className="flex text-white flex-1 justify-evenly">
        {Stat.map((i, id) => {
          return (
            <p key={id} className="flex items-center">
              <span className="font-semibold text-3xl">{i.content}</span>
              <span className="text-blue-500 text-lg ml-2"> {i.msg}</span>
            </p>
          );
        })}
      </div>
      <div className="text-white  w-full flex flex-stretch h-[90%] gap-20">
        {/* <div className="w-[50%]  sm:px-10 md:px-20 sm:py-10 md:py-20 space-y-9">
          <p className="font-semibold text-4xl leading-relaxed">
            You Will Do The Business <br></br>We Will Handle The Money
          </p>
          <p className="w-[80%] text-sm text-gray-400">
            whith the right of credit card you improve yourlife style by
            building credit ,earning rewards and saving money .But with hundreds
            of credits on the market
          </p>
          <button className="bg-blue-500 text-gray-950 text-xs p-3 font-semibold rounded-lg">
            Get Started
          </button>
        </div> */}
        <LeftSect
          heading="You  Do The Business
          We Will Handle The Money"
          content=" whith the right of credit card you improve yourlife style by building
        credit ,earning rewards and saving money .But with hundreds of credits
        on the market"
          btn="Get Started"
        />
        <div className="flex-1 flex   justify-center items-center">
          <div className="w-[60%] h-[80%] space-y-7 cursor-default">
            {/*the component */}
            {features.map((i, index) => {
              return (
                <Cards
                  img={i.img}
                  heading={i.heading}
                  content={i.content}
                  key={index}
                />
              );
            })}
            {/* comp end */}
          </div>
        </div>
      </div>
    </section>
  );
  function Cards({ img, heading, content }) {
    return (
      <div className="flex gap-3   flex items-center hover:bg-gray-900 p-3 rounded-md delay-75">
        <img
          src={img}
          className="bg-gray-900 p-3 rounded-full w-[52px] h-[52px]"
          alt=""
        />
        <div className="flex-1   flex flex-col pl-5">
          <h2 className="text-md font-semibold">{heading}</h2>
          <p className="text-gray-600 text-xs w-[70%]">{content}</p>
        </div>
      </div>
    );
  }
};
export default Stats;
