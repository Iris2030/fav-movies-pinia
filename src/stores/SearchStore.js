import { defineStore } from "pinia";
import { useMovieStore } from "./MovieStore";
import { ref } from "vue";

const url =
  "https:api.themoviedb.org/3/search/movie?api_key=967c6f14dacb0ca10f1175f7851a5869&query=";

export const useSearchStore = defineStore("searchstore", {
  state: () => ({
movies:[],
loader: false
       }),
    actions:{
        async getMovies(search){
            this.loader = true
          const res =  await fetch(`${url}${search}`)
          const data = await res.json()
         this.movies = data.results
         this.loader = false

        },
        addToFavMovies(object){
            const movieStore = useMovieStore();
            movieStore.movies.push({...object, isWatched: false})
            console.log(object);
            movieStore.activeTab = 1
        }
    }
});

// export const useSearchStore = defineStore("searchstore", () =>{
// const loader = ref(false)
// const movies = ref([])

// const getMovies = async () => {
    
// }
// })