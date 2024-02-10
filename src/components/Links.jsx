const Links = ({ heading, content }) => {
  return (
    <div className="">
      <p className="font-semibold text-gray-50 mb-2">{heading} </p>
      <div className="flex flex-col  items-start space-y-2">
        {/* <p className="text-gray-50">1</p> */}
        {content.map((i, id) => (
          <a className="text-gray-400 text-sm " key={id} href="#">
            {i}
          </a>
        ))}
      </div>
    </div>
  );
};
export default Links;
