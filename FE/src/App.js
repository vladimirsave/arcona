import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Account from "./components/Account";
import Farms from "./components/Farms";
import Nav from "./components/Nav";
import PageHeader from "./components/PageHeader";
import Tokens from "./components/Tokens";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PageHeader />
        <Nav />
        <Routes>
          <Route path="/"  element={<Navigate to="/farms" replace={true} />}></Route>
          <Route path="/farms" element={<Farms />}></Route>
          <Route path="/tokens" element={<Tokens />}></Route>
          <Route path="/account" element={<Account />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
