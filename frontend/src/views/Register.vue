<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h1 class="text-2xl font-semibold mb-4">Register</h1>
        <form @submit.prevent="register" class="space-y-4">
          <input v-model="username" class="w-full p-2 border border-gray-300 rounded" placeholder="Username" />
          <input v-model="password" type="password" class="w-full p-2 border border-gray-300 rounded" placeholder="Password" />
          <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded">Register</button>
        </form>
        <div v-if="error" class="text-red-500 mt-2">{{ error }}</div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const username = ref('');
  const password = ref('');
  const error = ref<string | null>(null);
  const router = useRouter();
  
  const register = async () => {
    error.value = null;
    try {
      const response = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: username.value, password: password.value }),
      });
      if (!response.ok) {
        throw new Error('Failed to register');
      }
      router.push('/login');
    } catch (err) {
      error.value = (err as Error).message;
    }
  };
  </script>
  