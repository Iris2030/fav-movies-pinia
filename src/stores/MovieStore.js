import { defineStore } from "pinia";

export const useMovieStore = defineStore("movieStore", {
  state: () => ({
    movies: [],
    activeTab: 2,
  }),
  getters: {
    watchedMovies() {
      return this.movies.filter((movie) => movie.isWatched);
    },
    totalCountMovies() {
      return this.movies.length;
    },
  },
  actions: {
    setActiveTab(id) {
      this.activeTab = id;
    },
    toggleWatch(id) {
      const index = this.movies.findIndex((movie) => movie.id === id);
      this.movies[index].isWatched = !this.movies[index].isWatched;
    },
    deleteMovie(id) {
        return this.movies = this.movies.filter(movie => movie.id !== id);
       },
  },
});
