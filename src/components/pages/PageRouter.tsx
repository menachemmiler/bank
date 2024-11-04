import {  Route, Routes } from "react-router-dom";
import Home from "./Home";
import Credit from "./Credit";
import Transaction from "./Transaction";
import NavBar from "./NavBar";

const PageRouter = () => {
  return (
    <>
      <NavBar/>
      <div className="main">
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="credit" element={<Credit />} />
          <Route path="Transaction" element={<Transaction />} />
        </Routes>
      </div>
    </>
  );
};

export default PageRouter;
