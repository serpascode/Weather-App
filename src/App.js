import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';


const API_KEY = "bfb8fcb033cac70076f86966f996c4f6";

class App extends React.Component{
  state = {
      name: undefined,
      country: undefined,
      temperature: undefined,
      weather: undefined,
      error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const CITY = e.target.elements.city.value;
    const COUNTRY = e.target.elements.country.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${CITY},${COUNTRY}&appid=${API_KEY}&units=imperial`);
    const data = await api_call.json();
    
    if(CITY && COUNTRY){
      try{
      this.setState({
        city: data.name,
        country: data.sys.country,
        weather: data.weather[0].description,
        temperature: data.main.temp,
        error: undefined
      });}catch(e){this.setState({error: "Enter a Valid City and Country!"});}
    }else{
      this.setState({
        error: "Please Enter a City and Select Country"
      });
    }
  }
  render(){
    return(
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-sm-5 title-container">
                  <Titles />
                </div>
                <div className="col-sm-7 form-container">
                  <Form getWeather={this.getWeather}/>
                  <Weather
                    city={this.state.city}
                    country={this.state.country}
                    weather={this.state.weather}
                    temperature={this.state.temperature}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
