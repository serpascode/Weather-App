import React from 'react';

class Weather extends React.Component{
  render(){
    return(
      <div>
        { this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p>}
        { this.props.weather  && <p>Weather: {this.props.weather}</p>}
        { this.props.temperature && <p>Temperature: {this.props.temperature} Degrees</p>}
        { this.props.error  && <p>Error: {this.props.error}</p>}
      </div>
    );
  }
}

export default Weather;
