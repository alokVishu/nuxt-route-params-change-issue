<script setup>
import demoPage from '@/views/demo.vue'
const route = useRoute()

const activeTab = ref(route.params.tab)
// tabs
const tabs = [
  { title: 'Profile', icon: 'mdi-account-outline', tab: 'profile' },
  { title: 'Team', icon: 'mdi-account-group-outline', tab: 'teams' },
  { title: 'Projects', icon: 'mdi-view-grid-outline', tab: 'projects' },
  { title: 'Connections', icon: 'mdi-link', tab: 'connections' },
]
</script>

<template>
  <VTabs v-model="activeTab" color="primary" class="v-tabs-pill mb-10" density="compact">
    <VTab v-for="item in tabs" :key="item.icon" :value="item.tab" :to="{ name: 'tabs-tab', params: { tab: item.tab } }">
      <VIcon size="20" start :icon="item.icon" />
      {{ item.title }}
    </VTab>
  </VTabs>

  <demoPage></demoPage>
</template>