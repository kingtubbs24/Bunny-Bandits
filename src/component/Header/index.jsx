/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import App from "../../App";
import Gif from "../../assets/images/nft.gif";
import "./style.css";

export default function Header() {
  return (
    <>
      <header className="masthead">
        <div className="container h-100" data-aos="zoom-in">
          <div className="row h-100 align-items-center">
            <div className="col-12 col-md-6">
              <h1 className="fw-light t-shadow">
                Welcome to <br /> Bunny Masks
              </h1>
              <p>
                You can mint one of your very own, unique Bunny Mask's using the
                mint button below
              </p>
              <App />
            </div>
            <div className="col-md-6 col-12">
              <img src={Gif} alt="nft-gif" className="img-fluid" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
