import { useState } from "react"

const Todos = () => {
    let [todos,setTodos]=useState([])
    let [value,setValue]=useState("")
   let handleSubmit=e=>{
        e.preventDefault();
        console.log(value.trim());
        
        if(value.trim()){
            setTodos([...todos,value])
            setValue("")
        }
    }
    let handleChange=e=>{
        setValue(e.target.value)
        
    }

  return (
    <div style={{border:"1px solid teal"}}>
        <form onSubmit={handleSubmit}>
            <h1>Todo List</h1>
            <input type="text" placeholder="New Task..." onChange={handleChange}/>
            <button type="submit">Add Task</button>
        </form>
        
            <ul>
                {todos.map((key,index)=>(
                    <li key={index}>{key}</li>
                ))}
            </ul>
        

    </div>
  )
}
export default Todos