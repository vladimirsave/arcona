import React, { useState } from "react";
import { Container, InputGroup, FormControl } from "react-bootstrap";
import pkg from "../assets/pngs/pkg.png";
import "../styles/tokens.css";
import Token from "../components/Token.jsx";
import { AiOutlineSearch } from "react-icons/ai";
import { Form, Row, Col } from "react-bootstrap";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";

const Tokens = () => {
  const [search, setSearch] = useState("");

  const tokens = [
    { logo: pkg, tokenName: "Token 1", companyName: "Company 1", price: 120.45 },
    { logo: pkg, tokenName: "Token 2", companyName: "Company 2", price: 230.78 },
    { logo: pkg, tokenName: "Token 3", companyName: "Company 3", price: 12.45 },
    { logo: pkg, tokenName: "Token 4", companyName: "Company 4", price: 1.78 },
    { logo: pkg, tokenName: "Token 5", companyName: "Company 5", price: 5.45 },
    { logo: pkg, tokenName: "Token 6", companyName: "Company 6", price: 68.78 },
    { logo: pkg, tokenName: "Token 7", companyName: "Company 7", price: 120.45 },
    { logo: pkg, tokenName: "Token 8", companyName: "Company 8", price: 230.78 },
    { logo: pkg, tokenName: "Token 9", companyName: "Company 9", price: 12.45 },
    { logo: pkg, tokenName: "Token 10", companyName: "Company 10", price: 1.78 },
    { logo: pkg, tokenName: "Token 11", companyName: "Company 11", price: 5.45 },
    { logo: pkg, tokenName: "Token 12", companyName: "Company 12", price: 68.78 },
    // ...
  ];

  const filteredTokens = tokens.filter((token) => token.tokenName.toLowerCase().includes(search.toLowerCase()));

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const [pageIndex, setPageIndex] = useState(0);

  const itemsPerPage = 5;
  const start = pageIndex * itemsPerPage;
  const end = start + itemsPerPage;
  const tokensToShow = filteredTokens.slice(start, end);

  return (
    <div className="token-page bg-light pt-2">
      <Container className="rounded-4 bg-white p-0 card">
        <Container className="p-0 custom-container" >
          <Container className="p-0 m-0">
            <Container className="mt-1">
              <h5 className="titleFarmable">Farmable tokens</h5>
            </Container>

            <div className="search-bar-container">
              <div className="search-icon-container">
                <AiOutlineSearch />
              </div>
              <input className="rounded-4 bg-white search-bar" placeholder="Search tokens" aria-label="Search tokens" value={search} onChange={handleSearchChange} />
            </div>

            {tokensToShow.map((token) => (
              <Container className="p-0 item" key={token.tokenName}>
                <Token {...token} />
                <hr className="bar" />
              </Container>
            ))}
          </Container>
        </Container>

        <Container className="switch-pages-container">
          <button className="chevron-button" onClick={() => setPageIndex(Math.max(pageIndex - 1, 0))}>
            <HiOutlineChevronLeft style={{ fontSize: "2rem", transform: "scale(0.55)" }} />
          </button>
          <div className="page-index">{`${pageIndex + 1}/${Math.ceil(filteredTokens.length / itemsPerPage)}`}</div>
          <button className="chevron-button" onClick={() => setPageIndex(Math.min(pageIndex + 1, Math.ceil(filteredTokens.length / itemsPerPage) - 1))}>
            <HiOutlineChevronRight style={{ fontSize: "2rem", transform: "scale(0.55)" }} />
          </button>
        </Container>
      </Container>
    </div>
  );
};

export default Tokens;
