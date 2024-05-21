const plusButton = document.getElementById("plusButton")
const minusButton = document.getElementById("minusButton")
const resetButton = document.getElementById("resetButton")
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

resetButton.addEventListener("click", () => {
    num = 0
    counter.innerHTML = num.toString()
})
