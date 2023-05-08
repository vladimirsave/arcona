import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import farms from "../assets/svgs/farms.svg"
import filter from "../assets/svgs/filter.svg"
import people from "../assets/svgs/people.svg"

function Farm() {
  return (
    <div
      style={{ backgroundColor: "#fff", border:"1px solid #e7e8ea" }}
      className="farms mx-auto mt-3 pb-2 rounded"
    >
      <div className="d-flex px-4 pt-4 pb-2">
        <div className="border border-dark">
          <img alt="picture" width={20} />
        </div>
        <div className="border border-light">
          <div>Farm name</div>
          <div className="grey-text">More info</div>
        </div>
      </div>

      <div className="grey-text p-2 ps-4">Farming has ended</div>

      <Container>
        <Row lg={4} className="text-center">
          <Col><img src={farms} style={{width: "16px"}}/></Col>
          <Col><img src={filter} style={{width: "16px"}}/> #</Col>
          <Col><img src={people} style={{width: "16px"}}/>#</Col>
        </Row>
      </Container>
    </div>
  );
}

export default Farm;
