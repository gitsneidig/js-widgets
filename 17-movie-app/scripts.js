// The value of API_KEY should come from a key obtained at https://www.themoviedb.org/settings/api
const API_KEY = '8e67679199523163c89c0ce20ff35a61'
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=1&api_key=${API_KEY}`
const API_IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const API_SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=8e67679199523163c89c0ce20ff35a61&query="'

const main = document.getElementById("main")
const form = document.getElementById("form")
const search = document.getElementById("search")

// Get initial movies
getMovies(API_URL) 

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    showMovies(data.results)
}

form.addEventListener('submit', (e) => {
    e.preventDefault() 

    const searchTerm = search.value

    if (searchTerm && searchTerm !=='') {
        getMovies(API_SEARCH_URL + searchTerm + '"')
        search.value = ''
    } else {
        window.location.reload()
    }
})

function showMovies(movies)  {
    console.log(movies)
    main.innerHTML = ''

    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie
        
        const movieElem = document.createElement('div')
        movieElem.classList.add('movie')

        movieElem.innerHTML = `
                <img src="${API_IMG_PATH + poster_path}" alt="${title}">
                <div class="movie-info">
                    <h3>${title}</h3>
                    <span class="${getClassByRate(vote_average)}">${vote_average}</span>
                </div>
                <div class="overview">
                    <h3>Overview</h3>
                    ${overview}
                </div>
        `

        main.appendChild(movieElem)
    })
}

function getClassByRate(vote) {
    if (vote >= 8) {
        return 'green'
    } else if (vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}