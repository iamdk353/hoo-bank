const LeftSect = ({
  heading,
  content,
  btn,
  styles = `w-[50%]  sm:px-10 md:px-20 sm:py-10 md:py-20 space-y-9 text-white`,
  Children,
}) => {
  return (
    <div className={` ${styles}`}>
      <p className="font-semibold text-4xl leading-relaxed">
        {/* You Will Do The Business <br></br>We Will Handle The Money */}
        {heading}
      </p>
      <p className="w-[80%] text-sm text-gray-400">
        {/* whith the right of credit card you improve yourlife style by building
        credit ,earning rewards and saving money .But with hundreds of credits
        on the market */}
        {content}
      </p>
      <a href="#">
        <button className="bg-blue-500 text-gray-950 text-xs p-3 font-semibold rounded-lg mt-5">
          {btn}
        </button>
      </a>
    </div>
  );
};
export default LeftSect;
