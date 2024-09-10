<template>
    <div v-if="showModal" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="close-button" @click="closeModal">X</button>
        <h2>{{ episode.name }}</h2>
        <p>Ar Date: {{ episode.air_date }}</p>
        <h3>Charactrs:</h3>
        <ul v-if="characters.length" class="character-list">
          <li v-for="character in characters" :key="character.id" class="character-item">
            <img :src="character.image" :alt="character.name" class="character-image" />
            <span class="character-name">{{ character.name }}</span>
          </li>
        </ul>
        <p v-else>Loading characters...</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import '@/assets/styles/episodeDetails.css'
  
  export default {
    name: 'EpisodeDetails',
    props: {
      episode: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        characters: [],
        showModal: true,
      };
    },
    watch: {
      episode: {
        immediate: true,
        handler(newEpisode) {
          if (newEpisode && newEpisode.characters) {
            this.fetchCharacters(newEpisode.characters);
          }
        },
      },
    },
    methods: {
      fetchCharacters(characterUrls) {
        this.characters = [];
        const characterPromises = characterUrls.map((url) => axios.get(url));
  
        Promise.all(characterPromises)
          .then((responses) => {
            this.characters = responses.map((response) => response.data);
          })
          .catch((error) => {
            console.error('Ошибка при получении данных о персонажах:', error);
          });
      },
      closeModal() {
        this.showModal = false;
        this.$emit('close');
      },
    },
  };
  </script>
  