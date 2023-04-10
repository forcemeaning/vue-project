<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">TripleK</a>
      <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul :class="{ 'navbar-nav': true, 'me-auto': menu.me_auto }" v-for="menu in menu_category" :key="menu.id">
          <li class="nav-item" v-for="menu_object in menu.value" :key="menu_object.key">
            <a
              :class="{ 'nav-link': true, active: menu === menu_object.eky }"
              @click="onMovePage($event, menu_object)"
              href="#"
              >{{ menu_object.value }}</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'NavBar',
};
</script>

<script setup>
import { ref, computed } from 'vue';
/**
 * menu는 ref Composition 함수를 이용해 만든 프록시 객체이다.(업데이트될 수 있는 반응성을 가짐을 의미)
 * 프록시는 ES6에서 해당 변수를 참조 가능한 반응형 객체로 만들어 DOM과 실시간으로 값을 공유할 수 있도록 만들어준다.
 * 이렇게 참조된 변수는 프록시 객체의 value 속성에 들어가게 되므로 변수 값을 변경하기 위해서는 value 속성의 값을 변경해야 한다.
 * e.g. menu.value = '새로운 값'
 */
const menu = ref('Profile');
const menus = [
  { key: 'home', value: '홈', url: '#', position: 'left' },
  { key: 'app', value: '애플리케이션', url: '#', position: 'left' },
  { key: 'me', value: 'Profile', url: '#', position: 'right' },
];

// 아래 두 변수는 Composition 함수를 이용해 만들어진 계산된 변수
const left_menus = computed(() => menus.filter((i) => i.position === 'left'));
const right_menus = computed(() => menus.filter((i) => i.position === 'right'));
// 함수 변수
const onMovePage = (event, menu_object) => {
  if (event) {
    event.preventDefault();
  }
  menu.value = menu_object.key;
};
const menu_category = [
  { id: 1, me_auto: true, value: left_menus.value },
  { id: 2, me_auto: false, value: right_menus.value },
];
/**
 * Composition API란?
 * Composition API는 변수의 성질에 따른 API 분리가 아닌 하나의 기능을 setup 함수에 묶어 컴포넌트의 코드를 이해하기 쉽게 해주는 것이 가장 큰 목적이다.
 * Composition API에 있어 모든 변수는 그냥 변수일 뿐이며, 그것을 잘 활용하는 방법은 개발자에게 달렸다.
 * 이는 결국 변수의 명명규칙에 조금 더 신경을 써야 한다는 뜻도 된다.
 * 여기서 소문자와 언더바로 이뤄진 것은 값을 가지는 변수로 취급하고, 낙타형으로 작성된 변수는 함수형 변수로 취급한다.
 */
</script>
