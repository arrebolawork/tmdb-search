const TOKEN_API =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzAzZjU1MGVhZDk4ZDdjOTRhNjdhMDI0ZDYyMmY5OSIsIm5iZiI6MTc0NDgyNTE1My40MTEsInN1YiI6IjY3ZmZlYjQxNDM3ZjBiODBlZWFkODA5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P-u51CiiknNIUDN2qLl25VpOksjpoWuXhctQ6lGmXBY";
const API_URL = "https://api.themoviedb.org/3/search/movie?query=";
const formularioData = document.querySelector("#formularioData");
const URL_GENRE = "https://api.themoviedb.org/3/genre/movie/list?language=en";
let genreList = [];

async function getMovie(movie) {
  try {
    const response = await axios.get(API_URL + movie, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${TOKEN_API}`,
        Accept: "application/json",
      },
    });
    console.log(response.data.results);
    renderCards(response.data.results);
  } catch (error) {
    throw new Error(error);
  }
}

function renderCards(movies) {
  const listMovies = document.querySelector("#listMovies");
  listMovies.innerHTML = "";
  movies.forEach((movie) => {
    const newCard = document.createElement("div");
    newCard.innerHTML = `
        <div class="card mb-3 " style="max-width: 440px; heigth:300px">
        <div class="row g-0">
        <div class="col-md-4">
        <img src="https://image.tmdb.org/t/p/w400/${movie.poster_path}" class="img-fluid rounded-start" alt="Poster de la pelicula ${movie.title}">
        </div>
        <div class="col-md-8">
        <div class="card-body g-4">
        <h4 class="card-title"><strong>${movie.title}</strong></h4>
        <p class="card-text text-truncate">${movie.overview}</p>
        <p class="card-text">Generos : ${genreList.filter((gen) => movie.genre_ids.includes(gen.id)).map((gen) => gen.name)}
        </div>
        </div>
        </div>
        </div>
        `;
    listMovies.appendChild(newCard);
  });
}
async function getGenre() {
  try {
    const res = await axios.get(URL_GENRE, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${TOKEN_API}`,
        Accept: "application/json",
      },
    });
    genreList = res.data.genres;
    console.log(genreList);
  } catch (error) {
    throw new Error(error);
  }
}
formularioData.addEventListener("submit", (e) => {
  e.preventDefault();
  getMovie(formularioData[0].value);
  formularioData[0].value = "";
});
document.addEventListener("DOMContentLoaded", getGenre);
