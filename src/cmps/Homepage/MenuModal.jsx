import React, { useState, useEffect } from "react";
import profileImage from "../../assets/img/profile.png";
import Xbutton from "../../assets/svg/Xbutton";
import FooterSearch from "../../assets/svg/FooterSearch";

export function MenuModal({ onClose }) {
  useEffect(() => {
    const closeModal = (event) => {
      if (
        !event.target.closest(".menu-modal-container") &&
        !event.target.closest(".menu-icon-wrapper")
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", closeModal);

    return () => {
      document.removeEventListener("mousedown", closeModal);
    };
  }, [onClose]);

  return (
    <div className="menu-modal-overlay">
      <div className="menu-modal-container">
        <img src={profileImage} alt="" />
        <i onClick={onClose} className="close-btn">
          <Xbutton />
        </i>
        <h1>Gaash Shmilovich</h1>
        <h2>Premium</h2>
        <div className="search-input">
          <input type="text" placeholder="Search here" />
          <i className="search">
            <FooterSearch />
          </i>
        </div>
      </div>
    </div>
  );
}
