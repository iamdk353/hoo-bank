import LeftSect from "./LeftSect";
const Common = ({ img, styles, imgStyles }) => {
  return (
    <section
      className={`bg-gray-950 h-[80vh] w-full flex ${styles}`}
      id="Features"
    >
      <div className="w-[40%] pl-10 flex items-center justify-center">
        <img
          src={img}
          alt="pay pal img"
          className={`w-[80%] h-[80%] ${imgStyles}`}
        />
      </div>
      <div className="flex-1  flex justify-center items-center">
        <LeftSect
          heading="Easily controlling your billing & invoiing"
          content="deleniti provident ullam architecto! Aliquam, odio quo. Debitis, officia at vel reiciendis reprehenderit totam, commodi ducimus repellat eveniet quibusdam blanditiis"
          btn="GET STARTED"
          styles="w-[60%] text-white pl-5  h-[80%] space-y-8"
        ></LeftSect>
      </div>
    </section>
  );
};
export default Common;
