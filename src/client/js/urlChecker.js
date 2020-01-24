function checkForURL(inputText) {
    let Rgex = RegExp('^(http|https):\/\/')
    if(Rgex.test(inputText)) {
        return true
    } else {
        alert("Please, insert a valid url. Need to start with http(s)://");
        return false
    }
}

export { checkForURL }
