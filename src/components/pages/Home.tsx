import { NavLink } from "react-router-dom";

const Home = () => {
  return (
      <div className="home">
        <NavLink to={"/pages/Credit"}>Credit</NavLink>
        <NavLink to={"/pages/Transaction"}>Transaction</NavLink>
      </div>
  );
};

export default Home;
