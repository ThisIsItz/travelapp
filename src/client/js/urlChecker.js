function checkForURL(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let Rgex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm;

    if(Rgex.test(inputText)) {
        return
    } else {
        alert("Please, insert a valid url");
    }
}

export { checkForURL }
