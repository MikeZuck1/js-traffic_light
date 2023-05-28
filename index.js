// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS((X)) StarTer_Code</h1>`;

// condition about traffic light 
const theTrafficLight = () => {
  let trafficLight = 'red'; 

  if (trafficLight === 'red') {
    return 'Stop!'; 
  } else if (trafficLight === 'yellow') {
    return 'Slow Down!!!'; 
  } else if (trafficLight === 'green') {
    return 'Go!'; 
  } else {
    return 'The traffic light doesn\'t work!!!'; 
  }
}; 
 
console.log(theTrafficLight()); 