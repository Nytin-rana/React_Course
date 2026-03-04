import { createContext } from "react"
import ContextReceiver from "./ContextReceiver";

export const Data=createContext();
export const Age=createContext();
const Context = () => {
    const naam="Nitin";
    const umar=20;
  return (
    <Data.Provider value={naam}>
        <Age.Provider value={umar}>
            <ContextReceiver />
        </Age.Provider>
    </Data.Provider>
  )
}
export default Context