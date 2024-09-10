<template>
  <div class="episodes">
    <h1>Episodes</h1>
    <div v-if="episodes.length">
      <ul class="episodes-container">
        <li v-for="episode in episodes" :key="episode.id" @click="selectEpisode(episode)" class="episode-item">
          <h2>{{ episode.name }}</h2>
          <p>Air Date: {{ episode.air_date }}</p>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>Loading episodes...</p>
    </div>

    <EpisodeDetails v-if="selectedEpisode" :episode="selectedEpisode" @close="selectedEpisode = null" />
  </div>
</template>

<script>
import axios from 'axios';
import EpisodeDetails from '@/components/EpisodeDetails.vue'; 
import '@/assets/styles/episodes.css'

export default {
  name: 'Episodes',
  components: { EpisodeDetails },
  data() {
    return {
      episodes: [],
      selectedEpisode: null,
    };
  },
  created() {
    axios.get('https://rickandmortyapi.com/api/episode')
      .then(response => {
        this.episodes = response.data.results;
      })
      .catch(error => {
        console.error('Error fetching episodes:', error);
      });
  },
  methods: {
    selectEpisode(episode) {
      this.selectedEpisode = episode;
    },
  },
};
</script>