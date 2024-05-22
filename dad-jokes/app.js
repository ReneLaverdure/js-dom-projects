window.onload = setJoke()

const display = document.querySelector("#jokes")
const jokeButton = document.querySelector("#jokeButton")

jokeButton.addEventListener("click", () => {
    setJoke()
})

async function fetchDadJokes() {

    try {
        let response = await fetch('https://icanhazdadjoke.com/', {
            headers: {
                Accept: 'application/json'
            }
        })
        let joke = await response.json()
        return joke.joke
    } catch (error) {
        console.error(error)
    }

}



async function setJoke() {

    const joke = await fetchDadJokes()
    display.innerHTML = joke
}


