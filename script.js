const API_KEY = 'YOUR_TMDB_API_KEY';  // Replace this
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';

async function getTrendingMovies() {
  const url = `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`;
  const res = await fetch(url);
  const data = await res.json();
  return data.results;
}

function showMovies(movies, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  movies.forEach(movie => {
    if (movie.poster_path) {
      const img = document.createElement('img');
      img.src = `${IMG_BASE_URL}${movie.poster_path}`;
      img.alt = movie.title;
      container.appendChild(img);
    }
  });
}

async function loadHomePage() {
  const trending = await getTrendingMovies();
  showMovies(trending, 'trending');
}

loadHomePage();
