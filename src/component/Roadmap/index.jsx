import React from "react";
import "./style.css";
import Roadmap1 from "../../assets/images/roadmap.jpg";

export default function Roadmap() {
  return (
    <section id="roadmap" className="roadmap">
      <img src={Roadmap1} alt="roadmap" className="img-fluid" width="100%" />
    </section>
  );
}
