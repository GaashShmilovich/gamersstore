import React from "react";
import FooterShape from "../../assets/svg/FooterShape";
import FooterGreenCircle from "../../assets/svg/FooterGreenCircle";
import FooterPurpleCircle from "../../assets/svg/FooterPurpleCircle";
import FooterBlueCircle from "../../assets/svg/FooterBlueCircle";
import FooterRedCircle from "../../assets/svg/FooterRedCircle";
import FooterSearch from "../../assets/svg/FooterSearch";
import Home from "../../assets/svg/Home";
import Wallet from "../../assets/svg/Wallet";
import Alert from "../../assets/svg/Alert";
import Social from "../../assets/svg/Social";

export function AppFooter() {
  return (
    <>
      <div className="footer-container">
        <FooterShape />
        <nav className="bottom-nav-container">
          <div className="left-nav">
            <a href="">
              <FooterGreenCircle />
              <span>
                <Home />
              </span>
            </a>

            <a href="">
              <FooterPurpleCircle />
              <span>
                <Wallet />
              </span>
            </a>
          </div>
          <div className="search-circle">
            <a href="">
              <FooterSearch />
            </a>
          </div>
          <div className="right-nav">
            <a href="">
              <FooterBlueCircle />
              <span>
                <Alert />
              </span>
            </a>

            <a href="">
              <FooterRedCircle />
              <span>
                <Social />
              </span>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
