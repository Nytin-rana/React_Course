import { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import InputBox from './components/InputBox'


function App() {

  const [amount,setAmount]=useState(0)
  const [calculatedAmount,setCalculatedAmount]=useState(0)
  const [from,setFrom]=useState("usd")
  const [to,setTo]=useState("inr")
  const rate=useCurrencyInfo(from);
  let currencyOptions=Object.keys(rate);
  const amountHandler =(val)=>{
    setAmount(Number(val))

  }
  const currencyHandler =(val)=>{
    setFrom(val)

  }
  const currencyHandlerTo =(val)=>{
    setTo(val)

  }
  const convert =()=>{
    setCalculatedAmount(amount * rate[to])
  
    
  }
  const swap=()=>{
    setFrom(to);
    setTo(from);
    setAmount(calculatedAmount)
    setCalculatedAmount(amount)
  }


  return (
    <>
    <div className='border border-amber-50 p-5 backdrop-blur-lg rounded-xl flex flex-col justify-center items-center w-130 h-90 gap-1'>

    <InputBox label="From" amount={amount} onAmountChange={amountHandler}currencyOptions={currencyOptions} onCurrencyChange={currencyHandler} selectCurrency={from}/>
    <InputBox label="To" amount={calculatedAmount} amountDisabled currencyOptions={currencyOptions} onCurrencyChange={currencyHandlerTo} selectCurrency={to}/>
    <button onClick={convert} className='bg-blue-600 p-2 w-100 rounded-md text-2xl font-semibold text-white shadow shadow-amber-200 mt-3'>{`Convert ${from.toUpperCase()} to ${to.toUpperCase()}`}</button>
    <button className="absolute top-33 text-lg bg-red-500 px-2 py-1 rounded-md text-white font-semibold" onClick={swap}>SWAP</button>
    </div>
    
    
    </>

  )
}

export default App
