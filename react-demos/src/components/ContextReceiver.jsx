import { useContext } from "react"
import {Data,Age} from "../components/Context"

const ContextReceiver = () => {
    const Name=useContext(Data)
    const age=useContext(Age)
  return (
    <h1>my name is {Name} and I'm {age} years old</h1>
  )
}
export default ContextReceiver