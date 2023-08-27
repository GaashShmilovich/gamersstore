import React, { useState } from "react";
import MenuIcon from "../../assets/svg/MenuIcon.jsx";
import CartIcon from "../../assets/svg/CartIcon.jsx";
import profileImage from "../../assets/img/profile.png";
import { MenuModal } from "./MenuModal";

export function AppHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="header-container ">
        <ul>
          <div onClick={toggleModal} className="menu-icon-wrapper">
            <MenuIcon />
          </div>
          {isModalOpen && <MenuModal onClose={closeModal} />}
          <div className="user-profile">
            <li>
              <CartIcon />
            </li>
            <li>
              <img src={profileImage} alt="profile" className="profile" />
            </li>
          </div>
        </ul>
      </div>
      <div className="header-categories full">
        <ul>
          <li>
            <a href="/">PC</a>
          </li>
          <li>
            <a href="/">Playstation</a>
          </li>
          <li>
            <a href="/">Xbox</a>
          </li>
          <li>
            <a href="/">Nintendo</a>
          </li>
        </ul>
      </div>
    </>
  );
}
