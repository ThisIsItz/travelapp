import { start } from "./countdown"
import { checkForLocation } from "./locationChecker"

  // function on submit
function handleSubmit(event) {
    event.preventDefault()
    const locationInput = document.getElementById('name').value;
    const date = document.getElementById('date').value
    checkForLocation();
    // 

     // Function to post data to our server
    const postData = async (url = '/add', data = {}) => {
        let response = await fetch(url, {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(data)
        });

        let newData = await response.json();
        try {
            console.log(newData)
            return newData
        } catch(error) {
            console.log('error',error);
        }
    }
    
    start();
    updateUI();
    document.getElementById('location').innerHTML = 'Mi trip to ' + locationInput.charAt(0).toUpperCase() + locationInput.slice(1);;
    document.getElementById('dateres').innerHTML = 'Departing on ' + date.split('-').reverse().join('/');
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
    document.getElementById('results').innerHTML = 'My results:' + data.coordenate;

}

export { handleSubmit }

