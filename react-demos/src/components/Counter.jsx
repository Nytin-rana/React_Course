import { useEffect, useState } from "react"

const Counter = () => {
    const[count,setCount]=useState(0);
    useEffect(()=>{
        document.title=`Count: ${count}`
    },[count])
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}
export default Counter