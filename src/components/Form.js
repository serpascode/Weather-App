import React from 'react';

class Form extends React.Component{
  render(){
    return(
      <form onSubmit={this.props.getWeather}>
        <input type="text" name="city" placeholder="Enter your City..." />
        
        <input type="radio" name="country" value="us" />
        <label>Us</label>
        <input type="radio" id="uk" name="country" value="uk" />
        <label>Uk</label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
