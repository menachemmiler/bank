import { createContext } from "react";
import Account from "../types/account";

const AccountContext = createContext<Account | undefined>(undefined)

export default AccountContext