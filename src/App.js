import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';


const API_KEY = "bfb8fcb033cac70076f86966f996c4f6";

class App extends React.Component{
  getWeather = async (e) => {
    e.preventDefault();
    const CITY = e.target.elements.city.value;
    const COUNTRY = e.target.elements.country.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${CITY},${COUNTRY}&appid=${API_KEY}&units=imperial`);
    const data = await api_call.json();
    console.log(data);
  }
  render(){
    return(
      <div>
        <Titles />
        <Form getWeather={this.getWeather}/>
        <Weather />
      </div>
    );
  }
}

export default App;
