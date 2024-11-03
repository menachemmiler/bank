import { NavLink, Route, Routes } from "react-router-dom";
import AuthRouter from "./components/auth/AuthRouter";
import PageRouter from "./components/pages/PageRouter";
import LoginGuard from "./guards/loginGuard";

const App = () => {
  return (
    <div className="app">
      {/* זה משנה את הנתיב */}
      <div className="navRoot">
        <NavLink to={"/pages"}>Home</NavLink>
        <NavLink to={"/Auth"}>login</NavLink>
      </div>

      <div className="main">
        <Routes>
          <Route path="Auth/*" element={<AuthRouter />} />
          <Route
            path="pages/*"
            element={
              // the element LoginGuard check if he is login else he cant' to get the PageRouter
              <LoginGuard>
                <PageRouter />
              </LoginGuard>
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
