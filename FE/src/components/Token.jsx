import React, { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { HiOutlineChevronDown } from "react-icons/hi";
import "../styles/token.css";

const Token = ({ logo, tokenName, companyName, price }) => {
  const [showLinks, setShowLinks] = useState(false);
  const [rotate, setRotate] = useState(false);

  const handleDropdownToggle = () => {
    setShowLinks(!showLinks);
    setRotate(!rotate);
  };

  return (
    <Container className="p-0">
      <Row className="">
        <Container className="d-flex align-items-center">
          <Col className="m-0 p-0"></Col>
        </Container>
        <Container className="token-info">
          <div className="d-flex justify-content-between">
            {/* <Container className="logo p-0" style={{ width: "0%" }}> */}
            <Image src={logo} alt={tokenName} height="32px" width="32px" className="logo" />
            {/* </Container> */}
            <div className="d-flex">
              <div>
                <h6 className="tokenName">{tokenName}</h6>
                <h6 className="companyName">{companyName}</h6>
              </div>

              <div className="price-container">
                <h6 className="price">${price.toFixed(2)}</h6>
              </div>
            </div>

            <div onClick={handleDropdownToggle} className={`showLinks ${rotate ? "rotate-left" : "rotate-right"}`}>
              <HiOutlineChevronDown/>
            </div>


          </div>

          {showLinks && (
       
             <div className="links">
      
              <ul>
                <button className="view-farms-button">
                  <a href="0x02F2D4a04E6E01aCE88bD2Cd632875543b2eF577">View farms</a>
                </button>
                <button>
                  <a href="https://v2.info.uniswap.org/token/0x02F2D4a04E6E01aCE88bD2Cd632875543b2eF577">Uniswap</a>
                </button>
                <button>
                  <a href="https://etherscan.io/address/0x02F2D4a04E6E01aCE88bD2Cd632875543b2eF577">Etherscan</a>
                </button>
              </ul>
             <span className="copy-adress"> 0x02F2D4a04E6E01aCE88bD2Cd632875543b2eF577</span> 
            </div>


  
          )}
        </Container>
      </Row>
    </Container>
  );
};

export default Token;
