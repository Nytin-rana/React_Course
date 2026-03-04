import { useState } from "react"
const Loader = () => {

    
    // let symbol="|"
    let [symbol,setsy]=useState(0);
    let intervalID=setInterval(function(){
        setsy(symbol+1)
    if (symbol>100){
        clearInterval(intervalID);
    }    

    },800)
    // intervalID();
  return (
    <div style={{margin:"10px",padding:"20px",textAlign:"center"}}>
        <h1>{symbol}</h1>
    </div>
  )
}

export default Loader