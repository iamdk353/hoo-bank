import UserCard from "./UserCard";
import { Feedback, companies } from "../assets/constants";
const Testimonials = () => {
  return (
    <section
      className="w-full h-[100vh] bg-gray-950  text-white "
      id="Solution"
    >
      <div className="flex  w-full h-[20vh]">
        <p className="w-[40%] flex justify-center items-center text-3xl font-semibold leading-[50px]">
          What people <br />
          are saying about us
        </p>
        <p className="flex-1 flex justify-center items-center text-md  leading-5 text-gray-500">
          Every this you need to do is accept the <br /> card payment and Grow
          your buisennes around the planet
        </p>
      </div>
      <div className="h-[70%] w-full flex justify-center items-center ">
        <div className="grid xl:grid-cols-3   h-[70%] w-[70%] gap-x-9 sm:grid-cols-2">
          {Feedback.map(({ content, img, position, name }, id) => {
            // content, img, name, position
            return (
              <UserCard
                content={content}
                img={img}
                position={position}
                name={name}
                key={id}
              />
            );
          })}
        </div>
      </div>
      <div className="w-full h-[5vh] flex justify-center items-center gap-x-20 flex-wrap">
        {companies.map((i, id) => {
          return <img src={i} className="w-[30vh] " key={id} />;
        })}
      </div>
    </section>
  );
};
export default Testimonials;
