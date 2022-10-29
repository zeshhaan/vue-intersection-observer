<template>
  <div class="space-y-4">
    <AsideList
      :items="items"
      :completed-tabs="completedTabs"
      :active-tab-index="activeTabIndex"
      @on-tab-click="onTabClick"
      @mark-as-complete="markAsComplete"
    />
    <TabContent :active-tab="activeTab" />
  </div>
  <footer class="flex flex-col items-center justify-end h-60">
    <Nav :items="items" @on-tab-click="onTabClick" />
  </footer>
</template>

<script setup lang="ts">
import { ref, unref } from 'vue';
import { useTabs } from './composable/useTab';
import AsideList from './components/CardList.vue';
import Nav from './components/Nav.vue';
import TabContent from './components/TabContent.vue';

const items = [
  {
    id: 'some-id',
    label: 'some id',
    complete: false,
  },
  {
    id: 'some-another-id',
    label: 'some another id',
    complete: false,
  },
  {
    id: 'yet-another-id',
    label: 'yet another id',
    complete: false,
  },
  {
    id: 'one-more-id',
    label: 'one more id',
    complete: false,
  },
];

const { activeTab, activeTabIndex, completedTabs, onTabClick, markAsComplete } =
  useTabs(items);
</script>

<style scoped></style>
