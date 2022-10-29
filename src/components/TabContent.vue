<template>
  <div class="p-4 text-center bg-yellow-100">
    <p>{{ activeTab.label }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['active-tab']);
</script>
