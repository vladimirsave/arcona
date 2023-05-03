import React, { useEffect, useState } from 'react';
import ConnectWallet from "../services/ConnectWallet/ConnectWallet";
import DisconnectWallet from '../services/DisconnectWallet/DisconnectWallet';
import { Button, Modal } from 'react-bootstrap';
import metamask from "../assets/svgs/MetaMask_Fox.svg";
import walletconnect from "../assets/svgs/wallet-connect.svg";
import coinbase from "../assets/svgs/coinbase-wallet.62578f59.svg";
import { ConnectWalletConnect, web3Modal } from '../services/ConnectWalletConnect/ConnectWalletConnect';
import { Web3NetworkSwitch } from '@web3modal/react';
import { Web3Button } from '@web3modal/react'
import Spinner from 'react-bootstrap/Spinner';
import Web3 from 'web3';
// import ConnectCoinbaseWallet from "../services/ConnectCoinbaseWallet/ConnectCoinbaseWallet";

function WalletsModal({ showWalletsModal, setShowWalletsModal, handleClose }) {
    const [hovered, setHovered] = useState(false);
    const [buttonDisconnect, setButtonDisconnect] = useState(true);
    const walletAddress = localStorage.getItem('walletAddress') || false;
    const [isMetaMaskConnected, setIsMetaMaskConnected] = useState(false);

    const handleDisconnectClick = async () => {
        setButtonDisconnect(true);
        setShowWalletsModal(false);
        // handleClose(e);
        // await setShowWalletsModal(false);
        // console.log(showWalletsModal);
        await DisconnectWallet();
    };

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    useEffect(() => {
        async function checkMetaMaskConnection() {
          if (window.ethereum) {
            const web3 = new Web3(window.ethereum);
            console.log('Work');
            try {
                console.log('Work1', isMetaMaskConnected);
              await window.ethereum.request({ method: 'eth_requestAccounts' });
              setIsMetaMaskConnected(true);
              console.log('Work2', isMetaMaskConnected);
            } catch (error) {
              console.log(error);
            }
          }
        }
        checkMetaMaskConnection();
      }, []);
    

    useEffect(() => {
        const div = document.querySelector('#metamask');

        div.addEventListener('click', () => {
            ConnectWallet();
            setButtonDisconnect(false);
        });

        // return () => {
        //     div.removeEventListener('click', () => {
        //         ConnectWallet();
        //         setButtonDisconnect(false);
        //     });
        // };
    }, [buttonDisconnect]);

    return (
        <Modal show={showWalletsModal} centered>

            <Modal.Header className="bg-secondary">
                <Modal.Title className="text-center w-100">Connect to a wallet
                </Modal.Title>
                <Button className="btn-close" onClick={handleClose} />
            </Modal.Header>

            <Modal.Body>

                <div className="row rounded-4">
                    <div className="col-4 d-flex justify-content-center align-items-center">
                        <img src={metamask} alt="Wallet 1" style={{ width: "5em", height: "5em" }} />
                    </div>
                    <div className="col-8 d-flex justify-content-center align-items-center">
                        <div className="container-fluid py-4">
                            <h4>MetaMask</h4>
                            {!walletAddress && buttonDisconnect ? <button
                                id="metamask"
                                className="blue-button rounded-pill bold-text"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                style={{
                                    backgroundColor: hovered ? '#f7f7f7' : 'transparent',
                                    boxShadow: hovered ? '0 0 4px rgba(0, 0, 0, 0.3), 0 0 8px rgba(0, 0, 0, 0.2), 0 0 15px rgba(0, 0, 0, 0.1), 0 0 8px rgba(0, 0, 0, 0.05)' : 'none',
                                    cursor: 'pointer',
                                    borderRadius: '10px',
                                    border: '1px solid rgb(231, 232, 234)'
                                }}> Connect Wallet
                            </button> :
                            
                                <div>
                                    <button
                                        id="metamask"
                                        onClick={handleDisconnectClick}
                                        className="button rounded-pill bold-text"
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                        style={{
                                            backgroundColor: hovered ? '#f7f7f7' : 'transparent',
                                            boxShadow: hovered ? '0 0 4px rgba(0, 0, 0, 0.3), 0 0 8px rgba(0, 0, 0, 0.2), 0 0 15px rgba(0, 0, 0, 0.1), 0 0 8px rgba(0, 0, 0, 0.05)' : 'none',
                                            cursor: 'pointer',
                                            borderRadius: '10px',
                                            border: '1px solid rgb(231, 232, 234)'
                                        }}>
                                                  <Spinner
                                        as="span"
                                        id=""
                                        animation="grow"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                    ></Spinner>
                                         Disconnect the wallet
                                    </button>
                                </div>}

                        </div>
                    </div>
                </div>

                <div className="row rounded-4" style={{ border: '0px solid rgb(231, 232, 234)' }}>
                    <div className="col-4 d-flex justify-content-center align-items-center">
                        <img src={coinbase} alt="Wallet 2" style={{ width: "4em", height: "4em" }} />
                    </div>
                    <div className="col-8 d-flex justify-content-center align-items-center">
                        <div className="container-fluid py-4">
                            <h4>CoinBase</h4>
                            {/* <button
                                id=""
                                className="blue-button rounded-pill bold-text"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                style={{
                                    backgroundColor: hovered ? '#f7f7f7' : 'transparent',
                                    boxShadow: hovered ? '0 0 4px rgba(0, 0, 0, 0.3), 0 0 8px rgba(0, 0, 0, 0.2), 0 0 15px rgba(0, 0, 0, 0.1), 0 0 8px rgba(0, 0, 0, 0.05)' : 'none',
                                    cursor: 'pointer',
                                    borderRadius: '10px',
                                    border: '1px solid rgb(231, 232, 234)'
                                }}> Connect Wallet
                            </button> */}
                        </div>
                    </div>
                </div>
                <div className="row rounded-4" style={{ border: '0px solid rgb(231, 232, 234)' }}>
                    <div className="col-4 d-flex justify-content-center align-items-center">
                        <img src={walletconnect} alt="Wallet 3" style={{ width: "4.5em", height: "4.5em" }} />
                    </div>

                    <div className="col-8 d-flex justify-content-center align-items-center">
                        <div className="container-fluid overflow-hidden">
                            <h4>Connect Wallet</h4>
                            {/* <w3m-core-button></w3m-core-button> */}
                            <div class="p-1">
                                <Web3Button
                                    icon="hide"
                                    label="Explore Web3"
                                    balance="show"
                                />
                            </div>
                            <div class="p-1">
                                <Web3NetworkSwitch />
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>

    );
}

export default WalletsModal;

