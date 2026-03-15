import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../todo/todoSlice"

function AddTodo() {
    const [input, setInput] = useState("")
    const dispatch=useDispatch()
    const addTodoHandler=(e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput("")

    }

  return (
    <form onSubmit={addTodoHandler} className="flex h-12 ">
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} className="border w-lg h-12 text-xl font-semibold rounded bg-pink-200 px-2 " placeholder="New Task..."/>
        <button type="submit" className=" text-white ml-2 hover:text-gray-500  text-5xl ">+</button>
    </form>
  )
}
export default AddTodo