import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useEffect } from 'react';
import Account from "./components/Account";
import Farms from "./components/Farms";
import Nav from "./components/Nav";
import PageHeader from "./components/PageHeader";
import Tokens from "./components/Tokens";
import ConnectWallet from "./services/ConnectWallet/ConnectWallet";
import "@fortawesome/fontawesome-svg-core/styles.css";
import ThemeContext from "./context/ThemeContext";
import { useState } from "react";
import "../src/styles/main.css";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };


  useEffect(() => {
    const walletMetaMaskAddress = localStorage.getItem('walletAddress');
    if (walletMetaMaskAddress) {
      ConnectWallet();
    }
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <BrowserRouter>
          <PageHeader />
          <Nav />
          <Routes>
            <Route
              path="/"
              element={<Navigate to="/farms" replace={true} />}
            ></Route>
            <Route path="/farms" element={<Farms />}></Route>
            <Route path="/tokens" element={<Tokens />}></Route>
            <Route path="/account" element={<Account />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
