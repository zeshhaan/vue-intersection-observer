<template>
  <ul v-for="(item, index) in items">
    <li @click="$emit('on-tab-click', index)" class="cursor-pointer">
      {{ item.label }}
    </li>
  </ul>
</template>
<script setup lang="ts">
const props = defineProps(['items']);
defineEmits(['on-tab-click']);
</script>
