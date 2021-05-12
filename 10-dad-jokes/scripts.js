const jokeElement = document.getElementById("joke")
const jokeBtn = document.getElementById("jokeBtn")

jokeBtn.addEventListener('click', generateJoke)

generateJoke() 

/* THEN VERSION
function generateJoke() {
    const apiConfig =  {
        headers: {
        'Accept': 'application/json'
        }}
        fetch('https://icanhazdadjoke.com', apiConfig)
            .then(res => res.json())
            .then(data => {
                jokeElement.innerHTML = data.joke
            })   
} */

// ASYNC VERSION
async function generateJoke() {
    const apiConfig =  {
        headers: {
        'Accept': 'application/json'
        }}
        const res = await fetch('https://icanhazdadjoke.com', apiConfig)
        const data = await res.json();
        jokeElement.innerHTML = data.joke
}

