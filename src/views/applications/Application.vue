<template>
  <p class="m-2">총 {{ applications_count }} 개의 어플리케이션 중 {{ applications.length }}개가 보여집니다.</p>
  <hr />
  <!-- eslint-disable-next-line vue/no-multiple-template-root -->
  <div class="row row-cols-1 row-cols-sm-3 g-2 m-0">
    <div class="col" v-for="data in applications" :key="data.id">
      <app-card :data="data" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { useApplicationsStore } from '../../stores/applications';
import AppCard from '../../components/AppCard.vue';
import axios from '../../axios';

const { filteredApplications, applications_count, setApplications } = useApplicationsStore();
const applications = computed(() => filteredApplications);

onMounted(() => {
  if (applications_count) {
    axios.get('/db/applications', (data) => setApplications(data));
  }
});
</script>
