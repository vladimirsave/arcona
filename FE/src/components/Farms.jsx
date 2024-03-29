import React from "react";
import "../styles/main.css";
import Farm from "./Farm";
import TotalLiquidity from "./TotalLiquidity";

function Farms() {
  return (
    <div className="pt-1 pb-4">
      <TotalLiquidity />
      <Farm />
    </div>
  );
}

export default Farms;
