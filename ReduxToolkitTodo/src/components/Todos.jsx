import { useSelector,useDispatch } from "react-redux"
import { removeTodo } from "../todo/todoSlice"


function Todos() {
    const dispatch=useDispatch()
    const todos=useSelector(state=>state.todos)
  return (
    <>
        {todos.map((todo)=>(
            <li key={todo.id} className="w-lg bg-gray-400 h-12 rounded  font-semibold font-2xl flex justify-between items-center px-3 mt-1 text-">
                {todo.text}
                <button onClick={()=>dispatch(removeTodo(todo.id))} className="bg-red-700 h-10 w-10 rounded-full text-white hover:bg-red-600">X</button>
            </li>
        ))}
    </>
  )
}
export default Todos