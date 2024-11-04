import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Credit from "./Credit";
import Transaction from "./Transaction";
import NavBar from "./NavBar";

const PageRouter = () => {
  return (
    <>
      <div className="navleft">
      <NavLink to={"/pages/home"}>home</NavLink>
        <NavLink to={"/pages/credit"}>credit</NavLink>
        <NavLink to={"/pages/Transaction"}>Transaction</NavLink>
      </div>
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
