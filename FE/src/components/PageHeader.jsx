import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { faSun, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FaEthereum } from "react-icons/fa";
import logo from "../assets/logo.svg";
import "../styles/header.css";
import ThemeContext from "../context/ThemeContext";
import WalletsModal from "./WalletsModalcopy";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import ConnectWallet from "../services/ConnectWallet/ConnectWallet";
// import { SiEthereum } from "react-icons/si";
// import { RiSunFill } from "react-icons/ri";

function PageHeader() {
  const { toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [showWalletsModal, setShowWalletsModal] = useState(false);
  const handleClose = (event) => {
    event.preventDefault();
    setShowWalletsModal(false);
    event.stopPropagation();
  };

  useEffect(() => {
    console.log(showWalletsModal);

}, [showWalletsModal]);


  return (
    <div
      className="d-flex flex-row justify-content-between ps-3 pe-4 py-3 align-items-center page-header"
      style={{ borderBottom: "1px solid #e7e8ea" }}
    >
      <div>
        <img src={logo} alt='logo' style={{ width: "30px", height: "30px" }} />
        <span className="orbitron ms-3 fw-bold">FARM</span>
      </div>
      <div className="d-flex flex-row align-items-center">
        <div>
        <button id="balance" className="header-btn light-grey-hover"></button>     
          <button className="header-btn light-grey-hover">
            <FaEthereum />
          </button>
          <button className="header-btn light-grey-hover" onClick={toggleTheme}>
            <FontAwesomeIcon icon={faSun} />{" "}
          </button>
          <button
            id="connect_button"
            className="blue-button rounded-pill blue-mix bold-text me-3"
            onClick={() => {
              setShowWalletsModal(true);
              console.log(showWalletsModal);
              navigate("/account");
            }}
          >
            Connect Wallet
            {showWalletsModal && (
              <WalletsModal
                showWalletsModal={showWalletsModal}
                handleClose={handleClose}
                setShowWalletsModal={setShowWalletsModal}
              />
            )}{" "}
          </button>
        </div>
        <div className="header-menu-btn">
          <button className="header-btn light-grey-hover bold-button">
            <span className="me-2">Menu</span>
            <FontAwesomeIcon icon={faAngleDown} />{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PageHeader;