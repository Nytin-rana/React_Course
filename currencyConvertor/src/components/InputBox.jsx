function InputBox({
    label="From",
    amount=500,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=["usd"],
    selectCurrency="usd",
    amountDisabled=false,
    currencyDisabled=false,
    className=""
}) {
  return (
    <div className={`flex  w-100 h-25 p-1 justify-around bg-white rounded-lg ${className}`}>
        <div className="flex flex-col gap-2">
        <label htmlFor="" className="text-gray-500 text-2xl">{label}</label>
        <input type="number" name="" id="" value={amount} className="border border-gray-400 text-xl p-1 rounded" onChange={(e)=> onAmountChange && onAmountChange(e.target.value)} disabled={amountDisabled}/>
        </div>
        <div className="flex flex-col gap-2">
            <p className="text-gray-500 text-2xl">Currency</p>
            <select name="" id="" value={selectCurrency} className="text-xl border rounded p-1" onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)} disabled=
            {currencyDisabled}>
                
                {currencyOptions.map((currency)=>(<option key={currency} value={currency}>{currency}</option>))}

            </select>
        </div>
    </div>
  )
}
export default InputBox