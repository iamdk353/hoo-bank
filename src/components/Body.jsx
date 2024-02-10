import { Hero, Stats, Common, Testimonials } from "./paths";
import { bill, card } from "../assets/paths";
const Body = () => {
  return (
    <section>
      {/* hero stats promo getStarted testimonoial */}
      <Hero></Hero>
      <Stats></Stats>
      <Common img={bill}></Common>
      <Common
        img={card}
        styles="flex-row-reverse pl-0 pr-20"
        imgStyles="w-[70%] h-[70%]"
      ></Common>
      <Testimonials />
    </section>
  );
};
export default Body;
