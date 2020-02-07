import {checkForURL} from "./urlChecker";

function handleSubmit(event) {
    event.preventDefault()

    let formText = document.getElementById('name').value
    let myForm = document.getElementById('form')

    if (checkForURL(formText)) {
    const getData = async (url = 'http://localhost:3000/test', data = {}) => {
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
    getData(undefined, {url: formText});
    document.getElementById('name').value = "";
}
    document.getElementById('name').value = "";
}


export { handleSubmit }
