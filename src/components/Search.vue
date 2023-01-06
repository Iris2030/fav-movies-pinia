<template>
    <div>
<form @submit.prevent="searchStore.getMovies(searchedMovie)" action="">
    <input 
    class="search-input"
     type="text"
      placeholder="enter movie"
      v-model="searchedMovie">
      <button class="search-btn" type="submit">Search</button>
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

form{
    display: flex;
}
.search-input {
  border: 1px solid #e7e7e7;
  width: 100%;
  height: 40px;
  padding: 0 10px;
  margin-bottom: 20px;
  border-radius: 10px;
}

.search-btn{
    border: none;
  width: 100px;
  height: 40px;
  font-size: 14px;
  margin: 0 10px;
  border-radius: 10px;
  cursor: pointer;
  background: #efefef;
  background: #1eb4c3;
  margin-right: auto;
}
</style>