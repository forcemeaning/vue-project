<template>
  <div class="container pt-5">
    <div>
      <p class="fs-1 mb-0">{{ user_data.name }}</p>
    </div>
    <div>
      <p class="fs-4">{{ user_data.email }}</p>
    </div>

    <div class="row no-gutters" v-for="(d, index) in user_data.resume" :key="index">
      <Card :top="!index" :resume="d" :show="index % 2 == 1" />
      <div class="col-sm-2 text-center flex-column d-none d-sm-flex">
        <div class="row h-50">
          <div class="col" :class="[index ? 'border-right' : '']" />
          <div class="col" />
        </div>
        <h1>
          <span class="badge badge-pill border" :class="[!index ? 'bg-primary text-light' : 'bg-light text-dark']">{{
            new Date(d.date).getFullYear()
          }}</span>
        </h1>
        <div class="row h-50">
          <div class="col" :class="[index != user_data.resume.length - 1 ? 'border-right' : '']" />
          <div class="col" />
        </div>
      </div>
      <Card :top="!index" :resume="d" :show="index % 2 == 0" />
    </div>
  </div>
</template>

<script>
import { defineComponent, computed, getCurrentInstance } from 'vue';
import { useAboutMeStore } from '../../stores/aboutMe';

// 다른 페이지에 사용할 컴포넌트가 아니고 그 코드가 짧기 때문에 Profile 컴포넌트 파일 내에서 Card 컴포넌트를 생성한다.
const Card = defineComponent({
  name: 'Card',
  props: {
    top: Boolean,
    resume: Object,
    show: Boolean,
  },
  setup() {},
  template: `
    <div v-if="show" class="col-sm py-2">
        <div class="card" :class="{'border-primary bg-primary text-light': top, shadow: top }">
            <div class="card-body">
            <h4 class="card-title" :class="[top ? 'text-light' : 'text-muted']">{{ resume.title }}</h4>
            <hr/>
            <p class="card-text">{{ resume.content }}</p>
            <a v-if="resume.url != 'null'" :href="resume.url" target="_blank" :class="[top ? 'text-light' : 'text-primary']">link</a>
            </div>
        </div>
    </div>
    <div v-if="!show" class="col-sm"></div>
  `,
});

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Profile',
  components: {
    Card,
  },
  setup() {
    const { user_data, setAboutMeData } = useAboutMeStore();
    //구조분해할당 활용해도 된다.
    //const { setAboutMeData } = storeToRefs(list);

    const { proxy } = getCurrentInstance();
    // const axios = inject('axios');

    proxy.axios.get('/db/about-me').then((res) => {
      setAboutMeData(res.data.data);
    });

    // Option API를 사용했기 때문에 return해야한다.
    return {
      user_data,
    };
  },
};
</script>
