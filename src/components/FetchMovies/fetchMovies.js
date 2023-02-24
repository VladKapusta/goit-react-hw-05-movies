const API_KEY = 'f337b3367ff87f6c35f27ef8641676b2'

export async function fetchTrendingMovies() {
  const r = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
  );
  const { results } = await r.json();
  return results;
}

export async function fetchMovie(id) {
  const r = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
  );
  const results = await r.json();
  return results;
}

export async function fetchMovieType(id, type) {
    const r = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/${type}?api_key=${API_KEY}&language=en-US`
      );
      const results = await r.json();
      return results;
    
} 

export async function fetchMovieByName(name) {
    const r = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${name}&language=en-US&page=1&include_adult=false`
      )
      const results = await r.json();
      return results;
    
} 
