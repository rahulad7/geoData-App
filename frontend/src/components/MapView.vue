<template>
  <div class="min-h-screen bg-gray-100 p-4">
    <div class="flex items-center justify-between mb-4">
      <h1 class="text-3xl font-semibold">Map View</h1>
      <button @click="logout" class="bg-red-500 text-white py-2 px-4 rounded-lg">Logout</button>
    </div>
    <div id="map" ref="mapContainer" class="h-[40rem] bg-gray-300 rounded-lg shadow-lg"></div>
    <HoverCard />
  </div>
</template>


<script setup lang="ts">
import { ref, onMounted } from "vue";
import mapboxgl from "mapbox-gl";
import { useAuthStore } from "../stores/authStore";
import { useRouter } from "vue-router";
import HoverCard from '../components/HoverCard.vue';
import { useHoverCard } from '../composables/useHoverCard';
const { showInfo, hideInfo } = useHoverCard();

const authStore = useAuthStore();
const router = useRouter();
const mapContainer = ref<HTMLDivElement | null>(null);

mapboxgl.accessToken =
import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

const logout = () => {
  authStore.clearAuth();
  router.push("/login");
};

onMounted(() => {
  // if (!authStore.token) {
  //   router.push("/login");
  //   return;
  // }

  const map = new mapboxgl.Map({
    container: mapContainer.value!,
    style: "mapbox://styles/mapbox/streets-v11",
    center: [0, 0],
    zoom: 2,
  });

  map.on('mousemove', (e) => {
    const features = map.queryRenderedFeatures(e.point);
    if (features.length) {
      const feature = features[0];
      const info = feature.properties.name_en ? (feature.properties.name_en) : 'No properties';
      console.log(info, "info");
      
      showInfo(info, { x: e.point.x, y: e.point.y });
    } else {
      hideInfo();
    }
  });

  map.on('mouseout', hideInfo);
});

// onMounted(() => {
//   mapboxgl.accessToken = '';

//   const map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/mapbox/streets-v11',
//     center: [121.037, 14.332],
//     zoom: 12.56,
//   });

//   map.on('load', () => {
//     map.addSource('places', {
//       type: 'geojson',
//       data: 'path-to-your-geojson-file',
//     });

//     map.addLayer({
//       id: 'places',
//       type: 'symbol',
//       source: 'places',
//       layout: {
//         'icon-image': 'marker-15',
//         'icon-allow-overlap': true,
//       },
//     });

//     map.on('mouseenter', 'places', (e) => {
//       map.getCanvas().style.cursor = 'pointer';

//       const coordinates = e.features[0].geometry.coordinates.slice();
//       const { name, ...properties } = e.features[0].properties;

//       while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
//         coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
//       }

//       showInfo(
//         { title: name || 'Unknown', properties },
//         { x: e.point.x, y: e.point.y }
//       );
//     });

//     map.on('mouseleave', 'places', () => {
//       map.getCanvas().style.cursor = '';
//       hideInfo();
//     });
//   });
// });
</script>
