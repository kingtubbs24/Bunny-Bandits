import React from "react";
import About from "../About";
import Faq from "../Faq";
import Footer from "../Footer";
import Header from "../Header";
import Roadmap from "../Roadmap";

export default function Page() {
  return (
    <>
      <Header />
      <About />
      <Roadmap />
      <Faq />
      <Footer />
    </>
  );
}
