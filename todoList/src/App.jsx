import { useEffect, useState } from 'react'

import './App.css'
import { TodoProvider } from './contexts'
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItems';

function App() {
  const [todos, setTodos] = useState(() => {
    try {
      const saved = localStorage.getItem("todos");
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error("Failed to load todos from localStorage:", error);
      return [];
    }
  });

  const addTodo=(todo)=>{
    setTodos((prev)=>[todo,...prev])
  }
  const updateTodo=(id,todo)=>{
    setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id ===id?todo:prevTodo))
  }
  const deleteTodo=(id)=>{
    setTodos((prev)=>prev.filter((prevTodo)=>prevTodo.id !==id))
  }
  const toggleCompleted=(id)=>{
    setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id?{...prevTodo,completed:!prevTodo.completed}:prevTodo))
  }
  
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
    <TodoProvider value={{todos,addTodo,deleteTodo,updateTodo,toggleCompleted}} >
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>(
                          <div className='w-full' key={todo.id}>
                            <TodoItem todo={todo} />

                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
