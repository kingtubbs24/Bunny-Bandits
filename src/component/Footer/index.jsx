/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.css";

export default function Footer() {
  return (
    <div class="footer-basic">
      <footer>
        <div class="social">
          <a href="https://www.instagram.com/minimachinesnft/">
            <i class="icon ion-social-instagram"></i>
          </a>
          {/* <a href="https://discord.gg/H4seu4HJ">
            <i class="fab fa-discord"></i>
          </a> */}
          <a href="https://twitter.com/MiniMachinesNFT">
            <i class="icon ion-social-twitter"></i>
          </a>
        </div>

        <p class="copyright">Mini Machines © 2022</p>
      </footer>
    </div>
  );
}
