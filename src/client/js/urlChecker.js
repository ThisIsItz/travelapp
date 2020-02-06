let name = document.getElementById('name');

function checkForURL(inputText) {
    name.value = ""
    let Rgex = RegExp('^(http|https):\/\/')
    if(Rgex.test(inputText)) {
        return true
    } else {
        alert("Please, insert a valid url. Need to start with http(s)://");
        return false
    }

    document.getElementById('name').value = "";
}

export { checkForURL }
