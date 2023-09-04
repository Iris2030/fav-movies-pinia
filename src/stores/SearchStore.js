import { defineStore } from "pinia";
import { useMovieStore } from "./MovieStore";
import { ref } from "vue";

const url =
  "https:api.themoviedb.org/3/search/movie?api_key=967c6f14dacb0ca10f1175f7851a5869&query=";

  const trendingFilmsUrl = `https://api.themoviedb.org/3/trending/movie/day?api_key=967c6f14dacb0ca10f1175f7851a5869`;


// export const useSearchStore = defineStore("searchstore", {
//   state: () => ({
// movies:[],
// loader: false
//        }),
//     actions:{
//         async getMovies(search){
//             this.loader = true
//           const res =  await fetch(`${url}${search}`)
//           const data = await res.json()
//           console.log('fetching...');
//          this.movies = data.results
//          this.loader = false

//         },
//         addToFavMovies(object){
//             const movieStore = useMovieStore();
//             movieStore.movies.push({...object, isWatched: false})
//             console.log(object);
//             movieStore.activeTab = 1
//         }
//     }
// });

export const useSearchStore = defineStore("searchstore", () => {
  const loader = ref(false);
  const movies = ref([]);
  const trandingMovies = ref([])

  const fetchTrendingMovies = async () => {
    loader.value = true;
    const res = await fetch(`${trendingFilmsUrl}`);
    const data = await res.json();
    trandingMovies.value = data.results;
    loader.value = false;
    return trandingMovies.value
  };

  const getMovies = async (searchedMovie) => {
    if(!searchedMovie){
      alert('please enter something');
      return
    }
    loader.value = true;
    const res = await fetch(`${url}${searchedMovie}`);
    const data = await res.json();
    movies.value = data.results;
    loader.value = false;

  };

  const addToFavMovies = (object) => {
    const movieStore = useMovieStore();
    movieStore.movies.push({ ...object, isWatched: false });
    movieStore.activeTab = 1;
  };

  return {loader, movies, getMovies, addToFavMovies, fetchTrendingMovies,trandingMovies}
});
