<template>
    <div>
<form @submit.prevent="searchStore.getMovies(searchedMovie)" action="">
    <input 
    class="search-input"
     type="text"
      placeholder="enter movie"
      v-model="searchedMovie">
</form>
<Loader v-if="searchStore.loader"/>
<div v-else>
    <Movie v-for="movie of searchStore.movies" :key="movie.id" :movie="movie" :isSearched="true"/>
</div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import {useSearchStore} from '../stores/SearchStore'
import Loader from './Loader.vue'
import Movie from './Movie.vue';
const searchStore = useSearchStore()
const searchedMovie = ref('')
</script>

<style scoped>
.search-input {
  border: 1px solid #e7e7e7;
  width: 100%;
  height: 40px;
  padding: 0 10px;
  margin-bottom: 20px;
  border-radius: 10px;
}
</style>