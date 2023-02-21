export async function fetchTrendingMovies() {
  const r = await fetch(
    'https://api.themoviedb.org/3/trending/movie/day?api_key=f337b3367ff87f6c35f27ef8641676b2'
  );
  const { results } = await r.json();
  return results;
}

export async function fetchMovie(id) {
  const r = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=f337b3367ff87f6c35f27ef8641676b2`
  );
  const results = await r.json();
  return results;
}

export async function fetchMovieType(id, type) {
    const r = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/${type}?api_key=f337b3367ff87f6c35f27ef8641676b2&language=en-US`
      );
      const results = await r.json();
      return results;
    
} 

export async function fetchMovieByName(name) {
    const r = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=f337b3367ff87f6c35f27ef8641676b2&query=${name}&language=en-US&page=1&include_adult=false`
      )
      const results = await r.json();
      return results;
    
} 
