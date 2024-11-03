import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navRoot">
      <NavLink to={"/pages/credit"}>credit</NavLink>
      <NavLink to={"/pages/Transaction"}>Transaction</NavLink>
    </div>
  );
}
