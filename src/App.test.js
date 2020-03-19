import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {render} from '@testing-library/react';

test('Renders without Error', () =>{
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('renders title "The Weather App"', ()=>{
  const {getByText} = render(<App />);

  const theTitle = 'The Weather App';
  expect(getByText(theTitle)).toBeInTheDocument();
  //expect(testApp.contains(theTitle)).toEqual(true);
});
