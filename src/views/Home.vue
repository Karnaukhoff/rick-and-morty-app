<template>
  <div class="characters">
    <h1>Characters</h1>
    <div v-if="characters.length">
      <ul>
        <li v-for="character in characters" :key="character.id" @click="selectCharacter(character)">
          <img :src="character.image" :alt="character.name" />
          <p class="characters-name">{{ character.name }}</p>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>Loading characters...</p>
    </div>

    <CharacterDetails v-if="selectedCharacter" :character="selectedCharacter" @close="selectedCharacter = null" />
  </div>
</template>

<script>
import axios from 'axios';
import CharacterDetails from '@/components/CharacterDetails.vue';
import '@/assets/styles/home.css'

export default {
  name: 'Characters',
  components: {
    CharacterDetails,
  },
  data() {
    return {
      characters: [],
      selectedCharacter: null, 
    };
  },
  methods: {
    selectCharacter(character) {
      this.selectedCharacter = character;
    },
  },
  created() {
    axios
      .get('https://rickandmortyapi.com/api/character')
      .then((response) => {
        this.characters = response.data.results;
      })
      .catch((error) => {
        console.error('Error fetching characters:', error);
      });
  },
};
</script>