import React from "react";
import "./style.css";

export default function Faq() {
  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="row py-5">
          <div className="col-md-10 col-12 ml-auto mr-auto">
            <h1 className="fw-light t-shadow text-center mb-5">
              <span className="text-light">Frequently Asked</span> Questions
            </h1>
            <div
              className="panel-group"
              id="accordion"
              role="tablist"
              aria-multiselectable="true"
            >
              <div className="panel panel-default" data-aos="fade-left">
                <div
                  className="panel-heading p-3 mb-3"
                  role="tab"
                  id="heading0"
                >
                  <h3 className="panel-title">
                    <a
                      className="collapsed"
                      role="button"
                      title=""
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapse0"
                      aria-expanded="true"
                      aria-controls="collapse0"
                    >
                      How much does a Mini Machine cost to mint?
                    </a>
                  </h3>
                </div>
                <div
                  id="collapse0"
                  className="panel-collapse collapse"
                  role="tabpanel"
                  aria-labelledby="heading0"
                >
                  <div className="panel-body px-3 mb-4">
                    <p className="text-light">1.44 SOL</p>
                  </div>
                </div>
              </div>

              <div className="panel panel-default" data-aos="fade-left">
                <div
                  className="panel-heading p-3 mb-3"
                  role="tab"
                  id="heading1"
                >
                  <h3 className="panel-title">
                    <a
                      className="collapsed"
                      role="button"
                      title=""
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapse1"
                      aria-expanded="true"
                      aria-controls="collapse1"
                    >
                      How many Mini Machines can I mint?
                    </a>
                  </h3>
                </div>
                <div
                  id="collapse1"
                  className="panel-collapse collapse"
                  role="tabpanel"
                  aria-labelledby="heading1"
                >
                  <div className="panel-body px-3 mb-4">
                    <p className="text-light">5 per transaction</p>
                  </div>
                </div>
              </div>

              <div className="panel panel-default" data-aos="fade-left">
                <div
                  className="panel-heading p-3 mb-3"
                  role="tab"
                  id="heading2"
                >
                  <h3 className="panel-title">
                    <a
                      className="collapsed"
                      role="button"
                      title=""
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapse2"
                      aria-expanded="true"
                      aria-controls="collapse2"
                    >
                      What blockchain do the Mini Machines roam?
                    </a>
                  </h3>
                </div>
                <div
                  id="collapse2"
                  className="panel-collapse collapse"
                  role="tabpanel"
                  aria-labelledby="heading2"
                >
                  <div className="panel-body px-3 mb-4">
                    <p className="text-light">Solana</p>
                  </div>
                </div>
              </div>

              <div className="panel panel-default" data-aos="fade-left">
                <div
                  className="panel-heading p-3 mb-3"
                  role="tab"
                  id="heading3"
                >
                  <h3 className="panel-title">
                    <a
                      className="collapsed"
                      role="button"
                      title=""
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapse3"
                      aria-expanded="true"
                      aria-controls="collapse3"
                    >
                      How many Mini Machines will be available?
                    </a>
                  </h3>
                </div>
                <div
                  id="collapse3"
                  className="panel-collapse collapse"
                  role="tabpanel"
                  aria-labelledby="heading3"
                >
                  <div className="panel-body px-3 mb-4">
                    <p className="text-light">5,555 ONLY!</p>
                  </div>
                </div>
              </div>

              <div className="panel panel-default" data-aos="fade-left">
                <div
                  className="panel-heading p-3 mb-3"
                  role="tab"
                  id="heading2"
                >
                  <h3 className="panel-title">
                    <a
                      className="collapsed"
                      role="button"
                      title=""
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapse4"
                      aria-expanded="true"
                      aria-controls="collapse4"
                    >
                      When is the pre-sale open?
                    </a>
                  </h3>
                </div>
                <div
                  id="collapse4"
                  className="panel-collapse collapse"
                  role="tabpanel"
                  aria-labelledby="heading2"
                >
                  <div className="panel-body px-3 mb-4">
                    <p className="text-light">March 4, 2022</p>
                  </div>
                </div>
              </div>
              <div className="panel panel-default" data-aos="fade-left">
                <div
                  className="panel-heading p-3 mb-3"
                  role="tab"
                  id="heading2"
                >
                  <h3 className="panel-title">
                    <a
                      className="collapsed"
                      role="button"
                      title=""
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapse5"
                      aria-expanded="true"
                      aria-controls="collapse5"
                    >
                      How many Mini Machines will be available to mint during
                      pre sale?
                    </a>
                  </h3>
                </div>
                <div
                  id="collapse5"
                  className="panel-collapse collapse"
                  role="tabpanel"
                  aria-labelledby="heading2"
                >
                  <div className="panel-body px-3 mb-4">
                    <p className="text-light">2,000 Mini Machines</p>
                  </div>
                </div>
              </div>
              <div className="panel panel-default" data-aos="fade-left">
                <div
                  className="panel-heading p-3 mb-3"
                  role="tab"
                  id="heading2"
                >
                  <h3 className="panel-title">
                    <a
                      className="collapsed"
                      role="button"
                      title=""
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapse6"
                      aria-expanded="true"
                      aria-controls="collapse6"
                    >
                      When is the official public sale open?
                    </a>
                  </h3>
                </div>
                <div
                  id="collapse6"
                  className="panel-collapse collapse"
                  role="tabpanel"
                  aria-labelledby="heading2"
                >
                  <div className="panel-body px-3 mb-4">
                    <p className="text-light">March 5, 2022</p>
                  </div>
                </div>
              </div>
              <div className="panel panel-default" data-aos="fade-left">
                <div
                  className="panel-heading p-3 mb-3"
                  role="tab"
                  id="heading2"
                >
                  <h3 className="panel-title">
                    <a
                      className="collapsed"
                      role="button"
                      title=""
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapse7"
                      aria-expanded="true"
                      aria-controls="collapse7"
                    >
                      Will you be donating any portion of the funds?
                    </a>
                  </h3>
                </div>
                <div
                  id="collapse7"
                  className="panel-collapse collapse"
                  role="tabpanel"
                  aria-labelledby="heading2"
                >
                  <div className="panel-body px-3 mb-4">
                    <p className="text-light">
                      Yes! We have pledged 55,555 to At-Risk Youth, Victims of
                      Sexual Abuse/Assault, Victims of Domestic Violence and
                      Military Veterans with Disabilities or battling PTSD.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
