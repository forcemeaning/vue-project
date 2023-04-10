import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

/**
 * Composition 방식
 */
export const useApplicationsStore = defineStore('applications', () => {
  const applications = ref([]);

  const applications_count = computed(() => applications.value.length);
  const filteredApplications = computed((filter) => {
    if (filter) {
      return applications.value.filter((i) => i.name === filter);
    }
    return applications.value;
  });

  const setApplications = (data) => {
    if (data.length > 0) {
      applications.value = data;
    }
  };

  return {
    applications,
    applications_count,
    filteredApplications,
    setApplications,
  };
});
