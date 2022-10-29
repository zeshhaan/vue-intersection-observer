<template>
  <aside class="flex flex-col items-center">
    <p class="p-2 bg-red-100">
      completed steps: {{ completedTabs }} / {{ items.length }}
    </p>
    <div class="p-4 flex gap-2 overflow-auto">
      <div
        v-for="(item, index) in items"
        class="
          flex flex-col
          items-center
          p-4
          border
          rounded-md
          gap-2
          bg-gray-100
          shrink-0
        "
        :class="index === activeTabIndex && 'bg-yellow-100'"
      >
        <div class="cursor-pointer" @click="$emit('on-tab-click', index)">
          {{ item.label }}
        </div>
        <div class="flex gap-2 text-xs">
          <button @click="$emit('mark-as-complete', index)">complete</button>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
const props = defineProps(['items', 'activeTabIndex', 'completed-tabs']);
defineEmits(['on-tab-click', 'mark-as-complete']);
</script>
