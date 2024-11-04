import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Credit from "./Credit";
import Transaction from "./Transaction";

const PageRouter = () => {
  return (
    <Routes>
      <Route path="home" element={<Home />} />
      <Route path="credit" element={<Credit />} />
      <Route path="Transaction" element={<Transaction />} />
    </Routes>
  );
};

export default PageRouter;
