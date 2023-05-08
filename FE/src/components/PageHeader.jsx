import React from "react";
import logo from "../assets/logo.svg";
import "../styles/header.css";
import menu from "../assets/svgs/expand_more.svg";
import ConnectWallet from "../services/ConnectWallet/ConnectWallet";
import { useNavigate } from "react-router-dom";
import { SiEthereum } from "react-icons/si";
import { RiSunFill } from "react-icons/ri";

function PageHeader() {
  const navigate = useNavigate();
  return (
    // <div className="d-flex flex-row justify-content-between m-0 align-items-center bg-white">
          <div className="d-flex flex-row justify-content-between p-4 align-items-center bg-white">

      <div className="d-flex">
        <img src={logo} style={{ width: "30px", height: "30px" }} />
        <span className="orbitron ms-3 fw-bold">FARM</span>
      </div>
      <div className="d-flex flex-row align-items-center">
        <div>
          <button className="header-btn light-grey-hover">
            <SiEthereum style={{ fontSize: "2rem", transform: "scale(0.65)" }} />
          </button>
          <button className="header-btn light-grey-hover icon">
            <RiSunFill style={{ fontSize: "2rem", transform: "scale(0.55)" }} />
          </button>

          <button
            id="connect_button"
            className="blue-button rounded-pill blue-mix bold-text me-3"
            onClick={() => {
              ConnectWallet();
              navigate("/account");
            }}
          >
            Connect Wallet
          </button>
        </div>
        <div>
          <button className="header-btn light-grey-hover bold-button">
            Menu <img src={menu} style={{ width: "24px" }} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
