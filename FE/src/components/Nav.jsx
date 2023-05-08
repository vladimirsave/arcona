import React from 'react'
import "../styles/header.css";
import tokens from "../assets/svgs/tokens.svg"
import farms from "../assets/svgs/farms.svg"
import account from "../assets/svgs/account.svg"
import { useNavigate } from 'react-router-dom';

function Nav() {
  const navigate = useNavigate()
  return (
    <div className='d-flex justify-content-center' style={{borderTop: "1px solid #e7e8ea", paddingBottom: "5px", paddingTop:"5px", paddingTop: "4px", backgroundColor:"white"}}>
      <button className='header-btn px-5 dark-grey-hover' onClick={()=>navigate("/tokens")}>
        <div><img src={tokens} alt="tokens" style={{width: "24px"}}/></div>
        <div className='fw-bold' style={{fontSize: "12px"}}>Tokens</div>
      </button>

      <button className='header-btn px-5 dark-grey-hover' onClick={()=>navigate("/farms")}>
        <div><img src={farms} alt="farms" style={{width: "24px"}}/></div>
        <div className='fw-bold' style={{fontSize: "12px"}}>Farms</div>
      </button>

      <button className='header-btn px-5 dark-grey-hover' onClick={()=>navigate("/account")}>
        <div><img src={account} alt="account" style={{width: "24px"}}/></div>
        <div className='fw-bold' style={{fontSize: "12px"}}>Account</div>
      </button>
    </div>
  )
}

export default Nav