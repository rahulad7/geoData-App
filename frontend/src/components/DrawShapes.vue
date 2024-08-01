<template>
    <div class="p-4">
      <h2 class="text-xl font-semibold mb-4">Draw Shapes</h2>
      <div id="map" class="map-container"></div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import mapboxgl from 'mapbox-gl';
  import MapboxDraw from '@mapbox/mapbox-gl-draw';
  import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
  
  const mapContainer = ref<HTMLDivElement | null>(null);
  
  onMounted(() => {
    mapboxgl.accessToken = 'your-mapbox-access-token';
  
    const map = new mapboxgl.Map({
      container: mapContainer.value!,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [121.037, 14.332],
      zoom: 12.56,
    });
  
    const draw = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
        polygon: true,
        trash: true,
      },
    });
  
    map.addControl(draw);
  
    map.on('draw.create', updateArea);
    map.on('draw.update', updateArea);
    map.on('draw.delete', updateArea);
  
    function updateArea() {
      const data = draw.getAll();
      console.log('Shapes:', data);
    }
  });
  </script>
  
  <style scoped>
  .map-container {
    width: 100%;
    height: 500px;
  }
  </style>
  