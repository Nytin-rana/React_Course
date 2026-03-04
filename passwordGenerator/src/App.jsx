import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
  const [password,setPassword]=useState("");
  const [length,setLength]=useState(8);
  const [symbolAllow,setSymbolAllow]=useState(false);
  const [numAllow,setNumAllow]=useState(false);
  const passRef=useRef(null);
  const passwordGenerator= useCallback(()=>{
      let pass="";
      let string="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if(numAllow) string+="1234567890";
      if(symbolAllow) string+="`~!@#$%^&*";
      for (let i = 1; i <= length; i++) {
        let index=Math.floor(Math.random()*string.length);
        let char=string.charAt(index);
        pass +=char;
        
      }
      setPassword(pass);

  },[length,numAllow,symbolAllow])
  function copyToClipboard (){
    passRef.current?.select();
    window.navigator.clipboard.writeText(password);
  
    

  }

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllow, symbolAllow, passwordGenerator])

  return (
    <>
    {/* main */}
    <div className='flex justify-center items-center flex-wrap h-screen'>
      {/* canvas */}
    <div className='border-2 border-white flex flex-wrap flex-col w-xl rounded-2xl h-40 items-center'>
      <h1 className='font-bold text-xl text-teal-600 mb-5 mt-2'>Password Generator</h1>
      {/* input div */}
      <div className='rounded-lg overflow-hidden'>
        <input type="text" name="pass" id="password" value={password} readOnly className='bg-gray-300  h-8 w-70 p-2 ' ref={passRef}/>
      <button className='bg-blue-600 font-semibold text-white h-8 w-20 cursor-pointer hover:bg-blue-800' onClick={copyToClipboard}>Copy</button>
      </div>
{/* option div */}
<div className='flex gap-3 mt-5 text-orange-500'>
  <input type="range" min={6} max={99}value={length}
  onChange={(e)=>setLength(e.target.value)}/>
  <label htmlFor="">Length :{length}</label>
  <input type="checkbox" name="" id="numbers" value={numAllow} onChange={()=>setNumAllow(!numAllow)}/>
  <label htmlFor="">Numbers</label>
  <input type="checkbox" name="" id="Chars" value={symbolAllow} onChange={()=>{setSymbolAllow(!symbolAllow);}
    
  }/>
  <label htmlFor="">Symbols</label>

</div>
    </div>

    </div>
    </>
  )
}

export default App
