<template>
    <transition name="fade">
      <div
        v-if="visible"
        :style="cardStyle"
        class="fixed p-2 bg-white border rounded-lg shadow-lg text-sm"
      >
        <div class="info-content">
          <p>{{ info }}</p>
        </div>
        <div class="arrow-down"></div>
      </div>
    </transition>
  </template>
  
  <script setup lang="ts">
  import { useHoverCard } from "../composables/useHoverCard";
  
  const { visible, info, cardStyle } = useHoverCard();
  </script>
  
  <style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  
  .fixed {
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
    padding: 8px;
    background: #fff;
    font-family: Arial, sans-serif;
    z-index: 1000;
  }
  
  .info-content {
    padding: 4px 8px;
    color: #333;
  }
  
  .arrow-down {
    position: absolute;
    bottom: -8px;
    left: 50%;
    margin-left: -8px;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid rgba(255, 255, 255, 0.8);
    box-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
  }
  </style>
  

