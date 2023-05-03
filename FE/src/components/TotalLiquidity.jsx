import React, { useState } from "react";
import NewFarmModal from "./NewFarmModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet, faAngleDown } from "@fortawesome/free-solid-svg-icons";

function TotalLiquidity() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div
      className="farms mx-auto mt-2 blue-mix p-4 pb-1 rounded-4"
      style={{ height: "165px" }}
    >
      <div className="d-flex flex-column align-items-center">
        <div className="text-light mitr display-6">$2.98M</div>
        <div className="text-light mitr">Total farming liquidity</div>
      </div>
      <div className="d-flex justify-content-end mt-4 mb-3">
        <button
          className="btn btn-outline-light rounded-pill py-0 px-3 me-2"
          onClick={handleShow}
          style={{ fontSize: "14px" }}
        >
          Create farm
        </button>
        <button className="btn btn-outline-light rounded-pill">
          <FontAwesomeIcon icon={faDroplet} />
          <FontAwesomeIcon icon={faAngleDown} />
        </button>
      </div>
      <NewFarmModal
        show={show}
        setShow={setShow}
        handleClose={handleClose}
        handleShow={handleShow}
      />
    </div>
  );
}

export default TotalLiquidity;
