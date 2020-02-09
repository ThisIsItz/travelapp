import { start } from "./countdown"
import { checkForLocation } from "./locationChecker"


const geoURL = 'http://api.geonames.org/postalCodeSearchJSON?placename='
const geoMore = '&username='
const geoUser = 'ThisIsItz'

// geonames API
const getGeo = async (location)=>{
    const res = await fetch(geoURL+location+geoMore+geoUser)
    try {
      const data = await res.json();
      console.log(data)
      return data;
    }  catch(error) {
      console.log("error", error);
    }
  }


  // function on submit

function handleSubmit(event) {
    event.preventDefault()
    const location = document.getElementById('name').value;
    const date = document.getElementById('date').value
    checkForLocation();
    getGeo(location);

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
    document.getElementById('location').innerHTML = 'Mi trip to ' + location.charAt(0).toUpperCase() + location.slice(1);;
    document.getElementById('dateres').innerHTML = 'Departing on ' + date.split('-').reverse().join('/');
}

const getData = async () => {
    try {
        const response = await fetch('/trip');
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

