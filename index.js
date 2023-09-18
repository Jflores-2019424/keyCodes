const key = document.getElementById("key")
const keyCode = document.getElementById("keyCode")
const code = document.getElementById("code")

window.addEventListener("keydown", (event) => {
    key.innerHTML = event.key;
    keyCode.innerHTML = event.keyCode;
    code.innerHTML = event.code;
})