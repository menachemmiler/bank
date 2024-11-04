import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate(); //מחלקה שאחראית על הניתובים
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    if (!username || !password) {
      alert("please provie usename + password");
      return;
    }
    const localName = localStorage.getItem("username");
    const localPas = localStorage.getItem("password");
    if (username !== localName || password !== localPas) {
      alert("incorrect info!");
      return;
    }
    localStorage.setItem("isLogin", "true");
    navigate("/pages/home"); //פונקצייה שמקבלת נתיב כפרמטר ומעביר אותו לנתיב
  };
  return (
    <div>
      <h1>Login</h1>
      <div className="form">
        <input
          value={username}
          onChange={(e) => {setUsername(e.target.value)}}
          type="text"
          placeholder="username"
          onKeyDown={(e) => {e.key == "Enter" && handleLogin()}}
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
          onKeyDown={(e) => {e.key == "Enter" && handleLogin()}}
        />
        <div className="aligh-left">
          {/* <input
            type="checkbox"
            checked={showPas}
            onChange={(e) => {setShowPas(e.target.checked); console.log(showPas)}}
          /> */}
          {/* <label for="vehicle1"> I have a bike</label> */}
        </div>
        <button type="submit" onClick={handleLogin}>
          submit
        </button>
      </div>
      <p>dont have account yet?</p>
      <Link to={"/auth/register"}>create your account now</Link>
    </div>
  );
};

export default Login;
