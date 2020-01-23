import {checkForURL} from "./urlChecker";

function handleSubmit(event) {
    event.preventDefault()

    let formText = document.getElementById('name').value
    checkForURL(formText)

    const getData = async (url = 'http://localhost:8080/test', data = {}) => {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json'
            },
            body: JSON.stringify(data)
        });

        try {
            const newData = await response.json();
            return newData
            console.log(newData)
        } catch(error) {
            console.log('error',error);
        }
    }
    getData();
}

export { handleSubmit }
