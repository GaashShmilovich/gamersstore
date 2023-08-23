import React from "react";
import MenuIcon from "../../assets/svg/MenuIcon.jsx";
import CartIcon from "../../assets/svg/CartIcon.jsx";
import profileImage from "../../assets/img/profile.png";

export function AppHeader() {
  return (
    <>
      <div className="header-container ">
        <ul>
          <li>
            <MenuIcon />
          </li>
          <div className="user-profile">
            <li>
              <CartIcon />
            </li>
            <li>
              <img src={profileImage} alt="profile" />
            </li>
          </div>
        </ul>
      </div>
      <div className="header-categories">
        <ul>
          <li>PC</li>
          <li>Playstation</li>
          <li>Xbox</li>
          <li>Nintendo</li>
        </ul>
      </div>
    </>
  );
}
