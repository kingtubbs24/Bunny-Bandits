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
                Welcome to <br /> Punk Babies
              </h1>
              <p>
                2,500 Punk Babies crawling on the Solana blockchain. New hand
                drawn traits. New generation of punks, same bloodline. Portion
                of Proceeds to Ukraine. Not affiliated with LarvaLabs.
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
                    <a href="https://twitter.com/Punk_Babies" target="_blank">
                      <i class="icon ion-social-twitter"></i>
                    </a>
                    <a href="https://discord.gg/6dE6t6QfvR" target="_blank">
                      <i class="fa-brands fa-discord"></i>
                    </a>
                  </div>
                  <p class="copyright">Punk Babies © 2022</p>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
