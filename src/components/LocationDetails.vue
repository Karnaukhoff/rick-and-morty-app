<template>
    <div v-if="showModal" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="close-button" @click="closeModal">X</button>
        <h2>{{ location.name }}</h2>
        <p>Type: {{ location.type }}</p>
        <p>Dimension: {{ location.dimension }}</p>
        <h3>Residents:</h3>
        <ul v-if="residents.length" class="resident-list">
          <li v-for="resident in residents" :key="resident.id" class="resident-item">
            <img :src="resident.image" :alt="resident.name" class="resident-image" />
            <span class="resident-name">{{ resident.name }}</span>
          </li>
        </ul>
        <p v-else>Loading residents...</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import '@/assets/styles/locationDetails.css'
  
  export default {
    name: 'LocationDetails',
    props: {
      location: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        residents: [],
        showModal: true,
      };
    },
    watch: {
      location: {
        immediate: true,
        handler(newLocation) {
          if (newLocation && newLocation.residents) {
            this.fetchResidents(newLocation.residents);
          }
        },
      },
    },
    methods: {
      fetchResidents(residentUrls) {
        this.residents = [];
        const residentPromises = residentUrls.map((url) => axios.get(url));
  
        Promise.all(residentPromises)
          .then((responses) => {
            this.residents = responses.map((response) => response.data);
          })
          .catch((error) => {
            console.error('Error fetching resident data:', error);
          });
      },
      closeModal() {
        this.showModal = false;
        this.$emit('close');
      },
    },
  };
  </script>