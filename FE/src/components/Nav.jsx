import React from "react";
import "../styles/header.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faSeedling,
  faUser,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

function Nav() {
  const navigate = useNavigate();
  return (
    <div className="d-flex nav-bar">
      <div>
        <button
          className="header-btn py-1 px-5 dark-grey-hover"
          onClick={() => navigate("/tokens")}
        >
          <div>
            <FontAwesomeIcon icon={faCircle} />
          </div>
          <div className="fw-bold" style={{ fontSize: "12px" }}>
            Tokens
          </div>
        </button>
      </div>
      <div>
        <button
          className="header-btn py-1 px-5 dark-grey-hover"
          onClick={() => navigate("/farms")}
        >
          <div>
            <FontAwesomeIcon icon={faSeedling} />
          </div>
          <div className="fw-bold" style={{ fontSize: "12px" }}>
            Farms
          </div>
        </button>
      </div>
      <div>
        <button
          className="header-btn py-1 px-5 dark-grey-hover"
          onClick={() => navigate("/account")}
        >
          <div>
            <FontAwesomeIcon icon={faUser} />{" "}
          </div>
          <div className="fw-bold" style={{ fontSize: "12px" }}>
            Account
          </div>
        </button>
      </div>
      <div className="nav-menu-btn">
        <button className="header-btn px-5 dark-grey-hover">
          <div>
            <FontAwesomeIcon
              icon={faBars}
              style={{ width: "24px", height: "24px" }}
            />
          </div>
          <div className="fw-bold">Menu</div>
        </button>
      </div>
    </div>
  );
}

export default Nav;
