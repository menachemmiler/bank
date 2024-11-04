import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate(); //מחלקה שאחראית על הניתובים
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleRegister = () => {
    if (!username || !password) return;
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    navigate("/auth"); //פונקצייה שמקבלת נתיב כפרמטר ומעביר
  };
  return (
    <div>
      <h1>Register</h1>
      <div className="form">
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="username"
          onKeyDown={(e) => {
            e.key == "Enter" && handleRegister();
          }}
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
          onKeyDown={(e) => {
            e.key == "Enter" && handleRegister();
          }}
        />
        <button
          type="submit"
          disabled={!username || !password}
          onClick={handleRegister}
        >
          submit
        </button>
      </div>
      <p>alredy have an account?</p>
      <Link to={"/auth"}>please login!</Link>
    </div>
  );
};

export default Register;
