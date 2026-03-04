// import Add from "./components/add";


import Cart from "./components/Cart";
import Context from "./components/Context";
import Counter from "./components/Counter";
import Header from "./components/header";
import Todos from "./components/Todos";
import Weather from "./components/Weather";
// import Greet from "./components/Greet";
// import Loader from "./components/Loader";
const Valid=()=>{return <h1>Valid Password</h1>
}
const Invalid=()=>{return <h1>Invalid Password</h1>
}
const Password=({isvalid})=>{
  return isvalid?<Valid />:<Invalid />;
 }

const App=function (){
  return <div>
    {/* <h1>I would say</h1>
    
    <Add /> */}
    <Header />
    <Password isvalid={false}/>
    <Cart />
    <Weather temp={20}/>
    {/* <Greet time="Morning"/> */}
    {/* <Loader /> */}
    <Todos />
    <Counter />
    <Context />

    

  </div>
};
export default App;