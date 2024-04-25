import React from "react";
import styles from "../style";
import { discount } from "../assets";
import { robot } from "../assets";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import "./user.css";

import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

import { close, menu } from "../assets";
import { navLinks } from "../constants";

export const Stats = () => {
  const navigate = useNavigate();
  const onsubmit = () => {
    navigate("/cardapply");
  };
  const onc = () => {
    navigate("depositform");
  };

  const [toggle, setToggle] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  const toggleAboutDropdown = () => {
    setAboutDropdown(!aboutDropdown);
    setServicesDropdown(false);
  };
  const toggleServicesDropdown = () => {
    setServicesDropdown(!servicesDropdown);
    setAboutDropdown(false);
  };

  window.onscroll = () => {
    setToggle(false);
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="app">
        <header className="app-header">
          <div className="app-header-mobile">
            <button className="icon-button large">
              <i className="ph-list"></i>
            </button>
          </div>
        </header>
        <div className="app-body">
          <div className="app-body-navigation"></div>
          <div className="app-body-main-content">
            <section className="service-section">
              <h2>Service</h2>
              <div className="service-section-header">
                <div className="search-field">
                  <i className="ph-magnifying-glass"></i>
                  <input type="text" placeholder="Loan Id" />
                </div>

                <button className="flat-button">Search</button>
              </div>
              <div className="mobile-only">
                <button className="flat-button">Toggle search</button>
              </div>
              <div className="tiles">
                <article className="tile">
                  <div className="tile-header">
                    <i className="ph-lightning-light"></i>
                    <h3>
                      <span>Electricity</span>
                      <span>UGVCL.</span>
                    </h3>
                  </div>
                  <a href="#">
                    <span>Go to service</span>
                    <span className="icon-button">
                      <i className="ph-caret-right-bold"></i>
                    </span>
                  </a>
                </article>
                <article className="tile">
                  <div className="tile-header">
                    <i className="ph-fire-simple-light"></i>
                    <h3>
                      <span>Gas</span>
                      <span>Sabarmati Gas</span>
                    </h3>
                  </div>
                  <a href="#">
                    <span>Go to service</span>
                    <span className="icon-button">
                      <i className="ph-caret-right-bold"></i>
                    </span>
                  </a>
                </article>
                <article className="tile">
                  <div className="tile-header">
                    <i className="ph-file-light"></i>
                    <h3>
                      <span>Tax online</span>
                      <span>Gst.</span>
                    </h3>
                  </div>
                  <a href="#">
                    <span>Go to service</span>
                    <span className="icon-button">
                      <i className="ph-caret-right-bold"></i>
                    </span>
                  </a>
                </article>
              </div>
              <div className="service-section-footer">
                <p>
                  Services are paid according to the current state of the
                  currency and tariff.
                </p>
              </div>
            </section>
            <section className="transfer-section">
              <div className="transfer-section-header">
                <h2>Latest transfers</h2>
                <div className="filter-options">
                  <p>Filter selected: more than 10000 </p>
                  <button className="icon-button">
                    <i className="ph-funnel"></i>
                  </button>
                  <button className="icon-button">
                    <i className="ph-plus"></i>
                  </button>
                </div>
              </div>
              <div className="transfers">
                <div className="transfer">
                  <div className="transfer-logo">
                    <img
                      src="https://assets.codepen.io/285131/apple.svg"
                      alt="Apple Logo"
                    />
                  </div>
                  <dl className="transfer-details">
                    <div>
                      <dt>Apple Inc.</dt>
                      <dd>Apple ID Payment</dd>
                    </div>
                    <div>
                      <dt>4012</dt>
                      <dd>Last four digits</dd>
                    </div>
                    <div>
                      <dt>28 Oct. 21</dt>
                      <dd>Date payment</dd>
                    </div>
                  </dl>
                  <div className="transfer-number">- 5500</div>
                </div>
                <div className="transfer">
                  <div className="transfer-logo">
                    <img
                      src="https://assets.codepen.io/285131/pinterest.svg"
                      alt="Pinterest Logo"
                    />
                  </div>
                  <dl className="transfer-details">
                    <div>
                      <dt>Pinterest</dt>
                      <dd>2 year subscription</dd>
                    </div>
                    <div>
                      <dt>5214</dt>
                      <dd>Last four digits</dd>
                    </div>
                    <div>
                      <dt>26 Oct. 21</dt>
                      <dd>Date payment</dd>
                    </div>
                  </dl>
                  <div className="transfer-number">- 1200</div>
                </div>
                <div className="transfer">
                  <div className="transfer-logo">
                    <img
                      src="https://assets.codepen.io/285131/warner-bros.svg"
                      alt="Warner Bros. Logo"
                    />
                  </div>
                  <dl className="transfer-details">
                    <div>
                      <dt>Warner Bros.</dt>
                      <dd>Cinema</dd>
                    </div>
                    <div>
                      <dt>2228</dt>
                      <dd>Last four digits</dd>
                    </div>
                    <div>
                      <dt>22 Oct. 21</dt>
                      <dd>Date payment</dd>
                    </div>
                  </dl>
                  <div className="transfer-number">- 700</div>
                </div>
              </div>
            </section>
          </div>
          <div className="app-body-sidebar">
            <section className="payment-section">
              <h2>New Payment</h2>
              <div className="payment-section-header">
                <p>Choose a card to transfer money</p>
                <div></div>
              </div>
              <div className="payments">
                <div className="payment">
                  <div className="card green">
                    <span>01/22</span>
                    <span>•••• 4012</span>
                  </div>
                  <div className="payment-details">
                    <h3>Credit Card</h3>
                    <div>
                      <span>10550</span>
                      <button className="icon-button">
                        <i className="ph-caret-right-bold"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="payment">
                  <div className="card olive">
                    <span>12/23</span>
                    <span>•••• 2228</span>
                  </div>
                  <div className="payment-details">
                    <h3>Debit Card</h3>
                    <div>
                      <span>10000+</span>
                      <button className="icon-button">
                        <i className="ph-caret-right-bold"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="faq"></div>
              <div className="payment-section-footer"></div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
