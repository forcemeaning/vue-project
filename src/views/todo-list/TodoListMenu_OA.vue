<template>
  <div class="row">
    <div class="col">
      <span style="background-color: blue">&nbsp;</span>&nbsp;
      <strong>{{ state }}</strong>
    </div>
    <div class="col">
      <div class="btn-group float-end">
        <button class="btn btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown">리스트 필터</button>
        <ul class="dropdown-menu dropdown-menu-end">
          <li v-for="key in Object.keys(filters)" :key="key">
            <a class="dropdown-item" @click="filter = key">{{ filters[key].str }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch, computed, inject } from 'vue';

export default {
  name: 'TodoListMenu',
  emits: ['change-filter'],
  setup(props, context) {
    const filters = inject('filters');
    const filter = ref(0);
    const state = computed(() => {
      return filters[filter.value].str;
    });
    watch(
      () => filter.value,
      (filter) => {
        // filter 변수를 감시하고, 이 값이 변결될 때마다 해당 키 값을 emit을 이용해 부모 컴포넌트인 TodoListaMain에게 전달한다.
        context.emit('change-filter', filter);
        // 객체 비구조화(Object Destructuring)을 이용하면 다음과 같이 할 수 있다.
        // setup(props, { emit }) { emit('change-filter', filter) }
      }
    );

    return {
      state,
      filter,
      filters,
    };
  },
};
</script>
