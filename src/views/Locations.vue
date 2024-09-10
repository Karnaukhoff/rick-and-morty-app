<template>
  <div class="locations">
    <h1>Locations</h1>
    <div v-if="locations.length">
      <ul class="location-list">
        <li
          v-for="location in locations"
          :key="location.id"
          @click="selectLocation(location)"
          class="location-item"
        >
          <h2>{{ location.name }}</h2>
          <p>Type: {{ location.type }}</p>
          <p>Dimension: {{ location.dimension }}</p>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>Loading locations...</p>
    </div>

    <LocationDetails
      v-if="selectedLocation"
      :location="selectedLocation"
      @close="selectedLocation = null"
    />
  </div>
</template>

<script>
import axios from 'axios';
import LocationDetails from '@/components/LocationDetails.vue';
import '@/assets/styles/locations.css'

export default {
  name: 'Locations',
  components: { LocationDetails },
  data() {
    return {
      locations: [],
      selectedLocation: null,
    };
  },
  created() {
    axios.get('https://rickandmortyapi.com/api/location')
      .then(response => {
        this.locations = response.data.results;
      })
      .catch(error => {
        console.error('Error fetching locations:', error);
      });
  },
  methods: {
    selectLocation(location) {
      this.selectedLocation = location;
    },
  },
};
</script>