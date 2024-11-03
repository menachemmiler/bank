import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

const AuthRouter = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default AuthRouter;