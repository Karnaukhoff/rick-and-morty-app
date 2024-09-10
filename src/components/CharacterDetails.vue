<template>
    <div class="modal" v-if="character">
      <div class="modal-content">
        <span class="close" @click="$emit('close')">&times;</span>
        <h2>{{ character.name }}</h2>
        <img :src="character.image" :alt="character.name" />
        <p><strong>Status:</strong> {{ character.status }}</p>
        <p><strong>Species:</strong> {{ character.species }}</p>
        <p><strong>Gender:</strong> {{ character.gender }}</p>
        <p><strong>Location:</strong> {{ character.location.name }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import '@/assets/styles/characterDetails.css'

  export default {
    name: 'CharacterDetails',
    props: {
      character: Object,
    },
  };
  </script>