const API_KEY = "1b453d15df081e9a1c204255975094d3";

const userrequests = {

    fetchTrending: `/discover/movie?api_key=${API_KEY}&languages=hi &region=IN&sort_by=popularity.desc&page=1&primary_release_year=2023&with_original_language=hi`,
    fetchNetflixOriginals: `/discover/movie?api_key=${API_KEY}&language=hi &region=IN&sort_by=popularity.desc&page=1&primary_release_year=2024&with_original_language=hi`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=hi&region=IN&sort_by=popularity.desc`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28 &region=IN&sort_by=popularity.desc&page=1&primary_release_year=2023&with_original_language=hi`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35 &region=IN&sort_by=popularity.desc&page=1&primary_release_year=2023&with_original_language=hi`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&region=IN&sort_by=popularity.desc&page=1&primary_release_year=2023&with_original_language=hi`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&region=IN&sort_by=popularity.desc&page=1&primary_release_year=2023&with_original_language=hi`,
    fetchAnimations: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchMystery: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,

}
export default userrequests
