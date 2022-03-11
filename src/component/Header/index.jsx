/* eslint-disable react/jsx-no-target-blank */
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
                Welcome to <br /> ELITE SANTA CLUB
              </h1>
              <p>
                The Elite Santa Club is a private collection of 10,000 unique
                Elite Santa’s characters.
              </p>
              <App />
            </div>
            <div className="col-md-6 col-12">
              <img src={Gif} alt="nft-gif" className="img-fluid" />
            </div>
            <div className="col-md-12">
              {" "}
              <div class="footer-basic">
                <footer>
                  <div class="social">
                    <a
                      href="https://twitter.com/elitesantaclub"
                      target="_blank"
                    >
                      <i class="icon ion-social-twitter"></i>
                    </a>
                    <a
                      href="https://discord.com/invite/jTm6NbrM5W"
                      target="_blank"
                    >
                      <i class="fa-brands fa-discord"></i>
                    </a>
                  </div>
                  <p class="copyright">Elite Santa Club © 2022</p>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
