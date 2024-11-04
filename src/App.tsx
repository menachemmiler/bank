import { NavLink, Route, Routes } from "react-router-dom";
import AuthRouter from "./components/auth/AuthRouter";
import PageRouter from "./components/pages/PageRouter";
import LoginGuard from "./guards/loginGuard";
import { useState } from "react";
import Bank from "./types/bank";
import Account from "./types/account";
import BankContext from "./context/bank";
import AccountContext from "./context/account";

const App = () => {
  const [bank, setBank] = useState<Bank>({
    treasure: 10000,
    users: [
      { name: "yo", account_id: "12345" },
      { name: "yo", account_id: "54321" },
    ],
  });
  const [account, setAccount] = useState<Account>({
    balance: 5000,
    id: "12345",
    loans: [],
    transactions: [],
  });
  return (
    <div className="app">
      <BankContext.Provider value={bank}>
        <AccountContext.Provider value={account}>
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
        </AccountContext.Provider>
      </BankContext.Provider>
    </div>
  );
};

export default App;
