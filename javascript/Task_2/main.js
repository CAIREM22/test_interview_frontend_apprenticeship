const textToChange = document.querySelector("#myText");
const button = document.querySelector("#changeText");

button.addEventListener("click", () => {
    textToChange.innerText = "Hello Check!";
});
