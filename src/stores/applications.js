import { reactive, computed } from 'vue';
import { defineStore } from 'pinia';

/**
 * Composition 방식
 */
export const useApplicationsStore = defineStore('applications', () => {
  const state = reactive({ applications: [] });

  // mutations
  const SET_DATA = (data) => {
    state.applications = data;
    console.log(state.applications);
  };

  // getters
  const applications_count = computed(() => state.applications.length);
  const applications = (filter = null) => {
    if (filter) {
      return computed(() => state.applications.filter((i) => i.name == filter));
    }
    return computed(() => state.applications);
  };

  // actions
  const setApplications = (data) => {
    if (data.length > 0) {
      SET_DATA(data);
    }
  };

  return {
    applications_count,
    applications,
    setApplications,
  };
});
