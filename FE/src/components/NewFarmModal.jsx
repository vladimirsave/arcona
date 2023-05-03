import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTriangleExclamation,
  faFileLines,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";

function NewFarmModal({ show, setShow, handleClose, handleShow }) {
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        className="d-flex justify-content-center align-items-center"
      >
        <Modal.Header closeButton className="d-flex">
          <div className="d-flex flex-column flex-grow-1  align-items-center">
            <Modal.Title>Launch a Farm</Modal.Title>
            <div style={{ fontSize: "12px" }}>Current block: 16892054</div>
          </div>
        </Modal.Header>
        <Modal.Body className="p-4" id="farm-modal-body">
          <div className="p-2">
            <div style={{ fontSize: "19.2px" }}>
              Launching a farm on a uniswap pair is now incredibly simple. You
              deposit the reward token into a vault contract, set the start
              block, endblock, and bonus period - And your done!
            </div>
            <div
              className="p-4 my-4 rounded"
              style={{ border: "1px solid #e7e8ea" }}
            >
              <div
                className="text-center"
                style={{ color: "#e91e63", fontSize: "19.2px" }}
              >
                <div>
                  <FontAwesomeIcon
                    icon={faTriangleExclamation}
                    style={{
                      color: "#5b39fe !important",
                      width: "24px",
                      height: "24px",
                    }}
                  />
                </div>
                Use at own risk
              </div>
              <div className="text-center" style={{ fontSize: "11.2px" }}>
                Please test your token on Kovan network first. If your token
                does not adhere to the ERC20 spec and there is a non standard
                transfer function in your contract a farm may fail to transfer
                rewards to farmers. TEST HARVESTING on Kovan before launching a
                farm on mainnet.
              </div>
            </div>
            <a
              href="https://docs.uncx.network/farming/create"
              target={"_blank"}
              style={{ textDecoration: "none", color: "#0f3256" }}
            >
              <div
                className="p-4 my-4 rounded"
                style={{ border: "1px solid #e7e8ea" }}
              >
                <div
                  className="text-center"
                  style={{ color: "#5b39fe", fontSize: "19.2px" }}
                >
                  <div>
                    <FontAwesomeIcon
                      icon={faFileLines}
                      style={{
                        color: "#5b39fe",
                        width: "24px",
                        height: "24px",
                      }}
                    />
                  </div>
                  Read the documentation
                </div>
                <div className="text-center" style={{ fontSize: "11.2px" }}>
                  This is a serious contract and will lock a large amount of
                  tokens. Please read them before proceeding.
                </div>
              </div>
            </a>
          </div>
          <div style={{ fontSize: "12px" }}>
            A farming contract is final. You cannot change any paramaters once
            initialised. There is no way to remove tokens other than farm them
            out over the set period. You cannot increase rewards either although
            you may create additional farms.
            <div className="mt-3">Do not use this with</div>
            <div className="d-flex align-items-start">
              <FontAwesomeIcon
                icon={faCircle}
                size="xs"
                className="mt-1 me-2"
              />
              <div>
                Rebasing tokens or any 'hack' on how a ERC20 token should
                function.
              </div>
            </div>
            <div className="d-flex align-items-start">
              <FontAwesomeIcon
                icon={faCircle}
                size="xs"
                className="mt-1 me-2"
              />
              <div>Fee to sender tokens</div>
            </div>
            <div className="d-flex align-items-start">
              <FontAwesomeIcon
                icon={faCircle}
                size="xs"
                className="mt-1 me-2"
              />
              <div>
                We reserve the right to delist your farm from our front end app
                if you dont adhere to these token specifications as it will
                affect farmers.
              </div>
            </div>
            Essentially 1 token must always equal 1 token. If you send someone
            one token and they recieve less than one token you wont be able to
            generate a farm. For the rest of the 99% of normal ERC20 tokens with
            no weird transfer functions or magically changing balances
            (rebasing), this platform is for you.
            <div style={{ color: "#5b39fe" }} className="mt-3">
              Feel free to email Mark at hello@unicrypt.network for help setting
              up your farm.
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="py-1 px-2">
          <Button
            className="rounded-pill w-100 h-100 py-3"
            style={{
              backgroundColor: "#5b39fe",
              color: "#fff",
              border: "none",
            }}
          >
            Continue
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NewFarmModal;
