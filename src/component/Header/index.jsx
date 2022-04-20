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
                Welcome to the <br />
                Lioness Cubs
              </h1>
              <p>
                1,111 Hand-drawn uniquely generated Lioness Cubs by a team of
                animal lovers. Strong DAO. Our token $CLAW will launch March
                2022! Staking platform will be available to Cubs Club holders.
                $CLAW token will have multiple utilities and will be able to be
                used on our in-house ecosystem, future breeding and to redeem
                rewards. Check out our Discord Community for all details! <br />
                <br />
                Whitelist 0.3 SOL & Public 0.5 Sol
              </p>
              <App />
            </div>
            <div className="col-md-6 col-12">
              <img src={Gif} alt="nft-gif" className="img-fluid my-5" />
            </div>
            <div className="col-md-12">
              {" "}
              <div class="footer-basic">
                <footer>
                  <div class="social">
                    <a href="https://twitter.com/CubsClubNFT" target="_blank">
                      <i class="icon ion-social-twitter"></i>
                    </a>
                    <a href="http://discord.gg/cubs" target="_blank">
                      <i class="fa-brands fa-discord"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/cubsclubnft/"
                      target="_blank"
                    >
                      <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a href="https://linktr.ee/Cubs.Club" target="_blank">
                      <i class="fa-solid fa-link"></i>
                    </a>
                  </div>
                  <p class="copyright">Lioness Cubs © 2022</p>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
