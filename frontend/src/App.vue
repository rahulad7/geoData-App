<template>
  <div>
    <nav class="navbar">
      <ul class="nav-list">
        <li><router-link to="/login" class="nav-btn">Login</router-link></li>
        <li><router-link to="/register" class="nav-btn">Register</router-link></li>
        <li><router-link to="/map" class="nav-btn">Map View</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.nav-list {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 1rem;
}

.nav-btn {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #3490dc;
  color: white;
  text-decoration: none;
  border-radius: 0.25rem;
  transition: background-color 0.3s;
}

.nav-btn:hover {
  background-color: #2779bd;
}

@media (max-width: 600px) {
  .navbar {
    flex-direction: column;
  }

  .nav-list {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
