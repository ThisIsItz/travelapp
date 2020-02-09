function checkForLocation(inputText) {
    let Rgex = RegExp('^(http|https):\/\/')
    if(Rgex.test(inputText)) {
        alert("Please, insert a valid location");
        return false
    } else {
        return true
    }
}

export { checkForLocation }
