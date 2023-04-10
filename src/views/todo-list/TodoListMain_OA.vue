<template>
  <todo-list-menu v-on:change-filter="onChangeFilter" class="p-0" />
  <div v-for="key in Object.keys(filtered_todos)" :key="key" class="mb-3">
    <div v-if="use_category">
      <em>{{ key }}</em>
    </div>
    <todo-list :data="filtered_todos[key]" />
  </div>
  <div class="my-2 mt-5">
    <span style="background-color: red">&nbsp;</span>&nbsp;
    <strong>처리하지 못한 작업들</strong>
  </div>
  <todo-list :data="pending_todos" />
</template>

<script>
export default {
  name: 'TodoListMain',
  
};
</script>