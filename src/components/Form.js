import React from 'react';

const Form =(props)=>(
  <form onSubmit={props.getWeather}>
    <input className="textInput" type="text" name="city" placeholder="Enter your City..." />

    <span className="radio_container">
      <label>Us
        <input type="radio" name="country" value="us" />
        <span className="checkmark"></span>
      </label>
      <label>Uk
        <input type="radio" id="uk" name="country" value="uk" />
        <span className="checkmark"></span>
      </label>
    </span>
    <button type="submit">Submit</button>
  </form>
);

export default Form;
