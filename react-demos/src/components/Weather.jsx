

const Weather = (props) => {
    let temp=props.temp;
  if(temp<15){

      return (<h1>It's Colder Outside</h1>)
  }
  else if(temp>15 && temp <25){

      return (<h1>It's Moderate Outside</h1>)
  }
  else{

      return (<h1>It's Hotter Outside</h1>)
  }
}

export default Weather