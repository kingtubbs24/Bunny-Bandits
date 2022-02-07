import React from "react";
import "./style.css";
import Logo from "../../assets/images/logo.png";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container h-100">
        <div className="row py-5 h-100 align-items-center">
          <div className="col-12">
            <h1 className="text-center t-shadow pb-3">
              <span style={{ color: "red" }}>What are</span> Mini Machines?
            </h1>
          </div>
          <div
            className="col-md-6"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <p className="text-justify">
              Mini Machines An NFT project that will not only reward its holders
              with giveaways but with a primary focus to donate to At-Risk
              Youth, Victims of Sexual Assault/Abuse, Victims of Domestic
              Violence, and Military Veterans battling PTSD and other
              disabilities.
            </p>
          </div>
          <div
            className="col-md-6"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <img src={Logo} alt="logo" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}
