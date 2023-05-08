import React from 'react'
import filter from "../assets/svgs/filter.svg";
import menu from "../assets/svgs/expand_more.svg";

function TotalLiquidity() {
  return (
    <div className="farms mx-auto mt-2 blue-mix py-3 px-4 rounded">
      <div className="d-flex flex-column align-items-center">
        <div className="text-light mitr fs-2">$2.98M</div>
        <div className="text-light mitr">Total farming liquidity</div>
      </div>
      <div className="d-flex justify-content-end">
        <button className="btn btn-outline-light rounded-pill">
          Create farm
        </button>
        <button className="btn btn-outline-light rounded-pill">
          <img src={filter}  style={{width: "24px"}}/>
          <img src={menu} style={{width: "16px"}}/>
        </button>
      </div>
    </div>
  )
}

export default TotalLiquidity