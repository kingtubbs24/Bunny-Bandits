import React from "react";
import "./style.css";
import Lordhodl from "../../assets/images/lordhodl.png";
import Roland from "../../assets/images/roland.png";
import Ryandi from "../../assets/images/ryandi.png";
import Luna from "../../assets/images/luna.png";

export default function Team() {
  return (
    <section className="team" id="team">
      <div className="container">
        <h1 className="fw-light t-shadow text-center mb-5">Team</h1>
        <div className="row">
          <div className="col-md-3 mt-2" data-aos="fade-right">
            <div class="card">
              <img src={Lordhodl} class="card-img-top" alt="Lordhodl" />
              <div class="card-body">
                <p class="card-text text-center">
                  <span style={{ color: "#ea8b00" }}>CEO AND ARTIST </span>
                  <br />
                  @LORDHODL_
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-2" data-aos="fade-right">
            <div class="card">
              <img src={Roland} class="card-img-top" alt="Roland" />
              <div class="card-body">
                <p class="card-text text-center">
                  <span style={{ color: "#99b287" }}>
                    PROJECT & MARKETING MANAGER
                  </span>{" "}
                  <br /> @ROLLAND
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-2" data-aos="fade-right">
            <div class="card">
              <img src={Luna} class="card-img-top" alt="luna" />
              <div class="card-body">
                <p class="card-text text-center">
                  <span style={{ color: "#add8e6" }}>
                    SOCIAL MEDIA MANAGER{" "}
                  </span>{" "}
                  <br />
                  @LUNASOUL
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-2" data-aos="fade-right">
            <div class="card">
              <img src={Ryandi} class="card-img-top" alt="ryandi" />
              <div class="card-body">
                <p class="card-text text-center">
                  <span style={{ color: "#ffff80" }}>
                    {" "}
                    DEVELOPER & WEBSITE DESIGNER
                  </span>{" "}
                  <br /> @RYANDI P.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
