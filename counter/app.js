const plusButton = document.getElementById("plusButton")
const minusButton = document.getElementById("minusButton")
const counter = document.getElementById("counter")

let num = 0

plusButton.addEventListener("click", (e) => {
    num++
    counter.innerHTML = num.toString()
})

minusButton.addEventListener("click", () => {
    num--
    counter.innerHTML = num.toString()
})
