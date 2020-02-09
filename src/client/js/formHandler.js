import { start, stopTimer } from "./countdown"
import { checkForLocation } from "./locationChecker"

  // function on submit
function handleSubmit(event) {
    event.preventDefault()
    const locationInput = document.getElementById('name').value;
    const date = document.getElementById('date').value
    checkForLocation();
    stopTimer();
    start();
    updateUI();
    document.getElementById('location').innerHTML = 'Mi trip to ' + locationInput.charAt(0).toUpperCase() + locationInput.slice(1);;
    document.getElementById('dateres').innerHTML = 'Departing on ' + date.split('-').reverse().join('/');
    document.getElementById('name').value = "";
}

const getData = async () => {
    const locationInput = document.getElementById('name')
    try {
        const response = await fetch('/trip/'+locationInput.value);
        if(response.ok) {
            console.log("heel")
          return await response.json().then(e => e);
        }
      } catch(error) {
        console.log('error', error);
      }
};


const updateUI = async () => {
    const data = await getData();
    console.log(data)
    document.getElementById('results').innerHTML = 'The weather is '+ data.temperature + "&deg"
    document.getElementById('photo').src = data.photo;

}

export { handleSubmit }

