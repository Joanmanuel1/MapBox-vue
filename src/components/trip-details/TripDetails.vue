<template>
    <div v-if="distance" 
        class="trip-container column">
        <div class="col"> Distancia: <strong>{{ distance }} kms</strong> </div>
        <div class="col"> Duración: <strong>{{ duration }} minutos</strong> </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useMapStore } from '@/composables';

export default defineComponent({
  name: 'TripDetails',
  setup() {

      const { distance, duration } = useMapStore()

    return {
        distance,
        duration
    }
  }
});
</script>


<style scoped>
.trip-container {
    background-color: white;
    border-radius: 10px;
    bottom: 25px;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
    font-size: 15px;
    left: 35%;
    padding: 10px;
    position: fixed;
    width: 250px;
}

strong {
    color: #42b983;
}
</style>