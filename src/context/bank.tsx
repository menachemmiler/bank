import { createContext } from "react";
import Bank from "../types/bank";

const BankContext = createContext<Bank | undefined>(undefined)

export default BankContext