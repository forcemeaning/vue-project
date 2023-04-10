import { defineStore } from 'pinia';

/**
 * Optional
 * Pinia는 기본적으로 state, actions, getters의 구조로 되어 있었는데, Vuex에서의 mutations이 없어지고 actions에서 처리하도록 통합되었다.
 * Pinia는 defineStore라는 함수를 이용하여 각각의 파일마다 별도의 store를 정의하여 module의 기능을 대신할 수 있다.
 * (※ pinia는 index.js 없이 모듈화된 파일만 있으면 된다.)
 */
export const useAboutMeStore = defineStore({
  id: 'about-me',
  state: () => ({
    name: null,
    email: null,
    resume: [],
  }),
  getters: {
    user_data: (state) => {
      const { name, email, resume } = state;
      return {
        name,
        email,
        resume,
      };
    },
  },
  actions: {
    setAboutMeData(data) {
      Object.keys(data).forEach((key) => {
        /**
         * pinia에서는 this를 통해 보다 편하게 접근
         */
        if (Object.keys(this).find((skey) => skey === key)) {
          this[key] = data[key];
        }
      });
    },
  },
});

/**
 * Q. 위 Options API를 Composition 방식으로 변경하면은?
 */
