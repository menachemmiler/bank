import { useNavigate, NavLink } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <div className="navleft">
      <NavLink to={"/pages/home"}>home</NavLink>
      <NavLink to={"/pages/credit"}>credit</NavLink>
      <NavLink to={"/pages/Transaction"}>Transaction</NavLink>
      <button
        onClick={() => {
          alert("Cd");
          localStorage.setItem("isLogin", "");
          navigate("/auth"); // כאן השתמש ב-navigate
        }}
      >
        Log Out
      </button>
    </div>
  );
}
