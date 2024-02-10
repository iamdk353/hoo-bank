import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Footer, Header, Body } from "./components/paths";

function App() {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
