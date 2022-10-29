import { ref } from 'vue';

export function useTabs(items) {
  const activeTab = ref(items[0]);
  const activeTabIndex = ref(0);
  const completedTabs = ref(0);

  const onTabClick = (index) => {
    activeTabIndex.value = index;
    activeTab.value = items[index];
  };

  const markAsComplete = (index) => {
    items[index].complete = true;
    completedTabs.value = items.filter((item) => item.complete).length;
    if (index === items.length - 1) {
      return;
    }
    onTabClick(index + 1);
  };

  return {
    activeTab,
    activeTabIndex,
    completedTabs,
    onTabClick,
    markAsComplete,
  };
}
