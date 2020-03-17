import React from 'react';

const Form =(props)=>(
  <form onSubmit={props.getWeather}>
    <input type="text" name="city" placeholder="Enter your City..." />
    <input type="radio" name="country" value="us" />
    <label>Us</label>
    <input type="radio" id="uk" name="country" value="uk" />
    <label>Uk</label>
    <button type="submit">Submit</button>
  </form>
);

export default Form;
