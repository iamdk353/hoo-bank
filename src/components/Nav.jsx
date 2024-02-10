import { nav } from "../assets/constants";
const Nav = () => {
  return (
    <div className="hidden lg:flex">
      {nav.map((i) => {
        return (
          <a className="text-white ml-8" href={`#${i.content}`} key={i.id}>
            {i.content}
          </a>
        );
      })}
    </div>
  );
};
export default Nav;
