<template>
  <p class="m-2">총 {{ applications_count }} 개의 어플리케이션 중 {{ applications.length }}개가 보여집니다.</p>
  <hr />
  <!-- eslint-disable-next-line vue/no-multiple-template-root -->
  <div class="row row-cols-1 row-cols-sm-3 g-2 m-0">
    <div class="col" v-for="data in applications" :key="data.id">
      <Card :data="data" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, getCurrentInstance } from 'vue';
import { useApplicationsStore } from '../../stores/applications';
import Card from '../../components/card/Card.vue';

const { proxy } = getCurrentInstance();

const { applications: _applications, applications_count, setApplications } = useApplicationsStore();

// 좋은 방법 없을까????
const applications = _applications();

// Vue2에서는 보통 created hook에서 처리하는 편인데, Dom이 mounted 후에 axios 통신을 한다??
onMounted(() => {
  if (!applications_count.value) {
    proxy.axios.get('/db/applications').then((res) => {
      console.info('res.data', res.data.data);
      setApplications(res.data.data);
    });
  }
});
</script>
