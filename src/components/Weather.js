import React from 'react';

const Weather =(props)=>(
  <div>
    { !props.error && props.city && props.country && <p>Location: {props.city}, {props.country}</p>}
    { !props.error && props.weather  && <p>Weather: {props.weather}</p>}
    { !props.error && props.temperature && <p>Temperature: {props.temperature} Degrees</p>}
    { props.error  && <p>Error: {props.error}</p>}
  </div>
);

export default Weather;
