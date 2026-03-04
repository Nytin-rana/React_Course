const Cart = () => {
    const styles={color:"crimson", backgroundColor:"teal",padding:"10px",borderRadius:"5px",width:"70px"}
    const items=["Iphone","Mac Studio","Macbook Pro","Ipad"];
  return (
    <div>
        <h1 style={styles}>Cart</h1>
        {items.length>0 && <h2>You Have {items.length} Products In Your Cart.</h2> }
        <ul>
            <h3>Products</h3>
            {items.map((item)=>
                (<li key={item}>{item}</li>)
            )}
        </ul>

    </div>

  )
}

export default Cart