const greet = (props) => {
  if(props.time==="Morning")
  return (
    <h1 style={{color:"white", backgroundColor:"skyblue"}}>Good Morning!</h1>
  )
  else {
    return <h1>Good AfterNoon!</h1>
  }
}
export default greet
