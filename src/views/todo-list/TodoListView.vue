<template>
  <main>
    <div class="todo">
      <h1>나의 할일</h1>
      <em>{{ today }}</em>
    </div>
    <todo-list-container />
  </main>
</template>

<script>
// SFC의 name, inheritAttrs, 사용자 옵션 등은 따로 script 태그에 작성한다.
export default {
  name: 'App',
};
</script>

<script setup>
import { inject } from 'vue';
import TodoListContainer from './TodoListContainer.vue';
const today = inject('today');
// <script setup> 에서는 따로 컴포넌트 선언이나 변수를 return하지 않아도 Vue 가 자동으로 설정해준다.
</script>

<style scoped>
@media (min-width: 1024px) {
  .todo {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
  }
}
</style>
