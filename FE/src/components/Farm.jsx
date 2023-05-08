import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSeedling,
  faDroplet,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

function Farm() {
  return (
    <div className="farms-list mx-auto">
      <div
        style={{ border: "1px solid #e7e8ea" }}
        className="mt-3 pb-2 rounded-4"
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
            <Col>
              {" "}
              <FontAwesomeIcon icon={faSeedling} />
            </Col>
            <Col>
              <FontAwesomeIcon icon={faDroplet} /> #
            </Col>
            <Col>
              <FontAwesomeIcon icon={faUserGroup} />#
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Farm;
