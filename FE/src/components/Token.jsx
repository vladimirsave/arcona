import React, { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { HiOutlineChevronDown } from "react-icons/hi";
import { BsArrowUpRight } from "react-icons/bs";
import { MdContentCopy } from "react-icons/md"
import "../styles/token.css";


const Token = ({ logo, tokenName, companyName, price }) => {
  const [showLinks, setShowLinks] = useState(false);
  const [rotate, setRotate] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const address = "0x02F2D4a04E6E01aCE88bD2Cd632875543b2eF577";

  // const handleDropdownToggle = () => {
  //   setShowLinks(!showLinks);
  //   setRotate(!rotate);
  // };

  // ...

const handleDropdownToggle = () => {
  setShowLinks(!showLinks);
  setRotate(!rotate);
};

// ...


  const handleCopyAddress = () => {
    navigator.clipboard.writeText(address);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <Container className="p-0">
      <Row className="">
        <Container className="d-flex align-items-center">
          <Col className="m-0 p-0"></Col>
        </Container>
        <Container className="token-info">
          <div className="d-flex justify-content-between">
            <Image src={logo} alt={tokenName} height="32px" width="32px" className="logo" />
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
              <HiOutlineChevronDown />
            </div>
          </div>

          {showLinks && (
            <div className="links">
              <ul>
                <button className="btn btn-transparent view-farms-button">
                  <a href="0x02F2D4a04E6E01aCE88bD2Cd632875543b2eF577">View farms</a>
                </button>
                <button className="btn btn-transparent uniswap-button">
                  <a href="https://v2.info.uniswap.org/token/0x02F2D4a04E6E01aCE88bD2Cd632875543b2eF577">Uniswap</a>
                  <BsArrowUpRight  style={{ fontSize: "2rem", transform: "scale(0.35)", marginLeft: "-8px" }} />
                </button>
                <button className="btn btn-transparent etherscan-button">
                  <a href="https://etherscan.io/address/0x02F2D4a04E6E01aCE88bD2Cd632875543b2eF577">Etherscan</a>
                  <BsArrowUpRight style={{ fontSize: "2rem", transform: "scale(0.35)", marginLeft: "-8px" }}/>
                </button>
              </ul>
              <div className="copy-address-container">
                <span className="copy-address">
                  {isCopied ? (
                    <>
                                 <span className="copied-message">Copied</span>
                                 <button className="btn btn-transparent copy-address" onClick={handleCopyAddress}>
                      {address.substr(0, 6)}...${address.substr(-4)}{" "}<MdContentCopy />
                    </button>

                    </>
       
                    
                  ) : (
                    <div>
                      {/* <span className="copied-message">Copied</span> */}
                      <button className="btn btn-transparent copy-address" onClick={handleCopyAddress}>
                      {address.substr(0, 6)}...${address.substr(-4)}{" "} <MdContentCopy/>
                    </button>
                    </div>

                  )}
                </span>
              </div>
            </div>
          )}
        </Container>
      </Row>
    </Container>
  );
};

export default Token;
