import {
  star,
  shield,
  send,
  people01,
  people02,
  people03,
  airbnb,
  binance,
  coinbase,
  dropbox,
  instagram,
  facebook,
  google,
  twitter,
  linkedin,
} from "./paths";
const nav = [
  { content: "Home", id: 1 },
  { content: "AboutUs", id: 2 },
  { content: "Features", id: 3 },
  { content: "Solution", id: 4 },
];
const Stat = [
  { content: "3800+", msg: "DAILY ACTIVE USERS" },
  { content: "230+", msg: "TRUSTED COMPANY" },
  { content: "$230M+", msg: "TRANSACTIONS" },
];
const features = [
  {
    img: star,
    heading: "Rewards",
    content:
      "The best credit cards offer some kind mindblowing combination of promotions and prizes",
  },
  {
    img: shield,
    heading: "100% Secured",
    content:
      "We take proactive steps to make sure your information and trancations are secured ",
  },
  {
    img: send,
    heading: "Balance Transfer",
    content:
      " A Balance transfer credit card can save you a lot of money in interest charges ",
  },
];
const Feedback = [
  {
    img: people01,
    content:
      "deleniti provident ullam architecto! Aliquam, odio quo. Debitis, officia at vel reiciendis reprehenderit totam, commodi ",
    name: "JHON",
    position: "React Developer",
  },
  {
    img: people02,
    content:
      "deleniti provident ullam architecto! Aliquam, odio quo. Debitis, officia at vel reiciendis reprehenderit totam, commodi ",
    name: "JHON",
    position: "React Developer",
  },
  {
    img: people03,
    content:
      "deleniti provident ullam architecto! Aliquam, odio quo. Debitis, officia at vel reiciendis reprehenderit totam, commodi ",
    name: "JHON",
    position: "React Developer",
  },
];
const companies = [airbnb, binance, coinbase, dropbox];
const links = [
  ["Content", "How it Works", "Create", "Explore", "Terms and Conditions"],
  ["Help", "Blog", "Partners", "Suggestions", "News Letter"],
  ["our Partner", "Become a Partner"],
];
const IocnsPaths = [instagram, facebook, twitter, linkedin];
export { nav, Stat, features, Feedback, companies, links, IocnsPaths };
