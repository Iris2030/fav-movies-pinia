import { defineStore } from "pinia";
import { computed, ref } from "vue";

// export const useMovieStore = defineStore("movieStore", {
//   state: () => ({
//     movies: [],
//     activeTab: 2,
//   }),
//   getters: {
//     watchedMovies() {
//       return this.movies.filter((movie) => movie.isWatched);
//     },
//     totalCountMovies() {
//       return this.movies.length;
//     },
//   },
//   actions: {
//     setActiveTab(id) {
//       this.activeTab = id;
//     },
//     toggleWatch(id) {
//       const index = this.movies.findIndex((movie) => movie.id === id);
//       this.movies[index].isWatched = !this.movies[index].isWatched;
//     },
//     deleteMovie(id) {
//         return this.movies = this.movies.filter(movie => movie.id !== id);
//        },
//   },
// });

export const useMovieStore = defineStore("movieStore", () => {
  const movies = ref([]);
  const activeTab = ref(2);

  const watchedMovies = computed(() =>{
          return movies.value.filter((movie) => movie.isWatched);
  })

  const totalCountMovies = computed(() =>{
    return movies.value.length;
})

  const setActiveTab = (id) => {
    activeTab.value = id
  };

  const toggleWatch = (id) => {
          const index = movies.value.findIndex((movie) => movie.id === id);
          movies.value[index].isWatched = !movies.value[index].isWatched;
        }

        const deleteMovie = (id) => {
        return movies.value = movies.value.filter(movie => movie.id !== id);
       }

  return {activeTab, movies, toggleWatch, setActiveTab, deleteMovie,watchedMovies,totalCountMovies}
});