
import { start } from "./countdown"

function handleSubmit(event) {
    event.preventDefault()

    let location = document.getElementById('name').value
    let date = document.getElementById('date').value

    const getData = async (url = 'http://localhost:4000/test', data = {}) => {
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(data)
        });

        let newData = await response.json();
        try {
            console.log(newData)
            document.getElementById('results').innerHTML = `<div><strong>Your results: <br> <br>
                                                            The polarity is: ${newData.polarity} <br>
                                                            The subjectivity is: ${newData.subjectivity} <br>
                                                            The polarity confidence is: ${newData.polarity_confidence} <br>
                                                            The subjectivity confidence is: ${newData.subjectivity_confidence} </div>` 


            return newData
        } catch(error) {
            console.log('error',error);
        }
    }
    getData(undefined, {url: location});
    start()
    document.getElementById('location').innerHTML = 'Mi trip to ' + location;
    document.getElementById('dateres').innerHTML = 'Departing on ' + date;
}


export { handleSubmit }
