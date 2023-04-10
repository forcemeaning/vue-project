import { defineComponent } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import Profile from '../views/about-me/Profile.vue';
import TodoList from '../views/todo-list/TodoListView.vue';

const NotFound = defineComponent({
  template: '<div>Not Found</div>',
});

const router = createRouter({
  /**
   * 웹페이지의 자취를 기록하는 것으로 다음과 같은 모드가 존재한다.
   * createWebHistory: URL에 변화없이 사용하는 기본 방식
   * createWebHashHistory: hash(#)를 URL에 붙여준다.
   */
  history: createWebHistory(import.meta.env.BASE_URL),
  /**
   * 활성화된 링크에 대해서 추가적인 클래스를 넣어줄 수 있다.
   * 이는 활성화된 링크에 대해서 Bootstrap이 미리 정의한 CSS를 적용하라는 뜻이다.
   * 이렇게 하면 NavBar 컴포넌트에서 활성화된 링크를 찾아서 직접 active 클래스를 적용시켜주는 수고를 덜 수 있다.
   */
  linkActiveClass: 'active',
  // RouteRecordRaw를 넣는다.
  routes: [
    {
      path: '/',
      redirect: '/profile',
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      alias: '/home',
      /**
       * 네비게이션 가드(Navigation Guard)를 입력받아 라우팅이 실제로 발생되기 전에 호출한다.
       * 이는 일반적으로 query의 변형, hash의 삭제/추가 그리고 라우팅에 대한 거절 등을 할 때 사용된다.
       * @param {*} to 이동할 Route 객체
       * @param {*} from Guard를 호출하기 직전의 Route 객체
       * @param {*} next to로의 이동행위를 승인할 것인지, 취소할 것인지 아니면 아예 다른 경로로 보낼 것인지를 정할 수 있다.
       */
      // beforeEnter: (to, from, next) => {
      //   next(false);
      // },
    },
    // {
    //   path: '/applications/:app-name?',
    //   name: 'Profile',
    //   component: Profile,
    //   /**
    //    * router-view의 전달인자를 속성으로 변경시켜준다.
    //    * $route.params['app-name] 대신 [app-name]으로 변경시켜준다.
    //    */
    //   props: true,
    //   // 객체 모드를 이용해 객체를 전달할 수도 있다. 이는 일반적으로 미리 지정된 props를 전달해야 할 때 많이 사용한다.
    //   // props: { foo: true, bar: false }
    // },
    // {
    //   // \\d: 오직 숫자만 전달인자로 인식한다.
    //   path: '/resume/:year(\\d)',
    //   name: 'Profile',
    //   component: Profile,
    // },
    {
      path: '/todo-list',
      name: 'todoList',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: TodoList,
      // component: () => import('../views/todo-list/TodoListView.vue'),
    },
    {
      path: '/:catchAll(.*)+',
      component: NotFound,
    },
    /**
     * components 속성이 객체형식으로 지정이 되면 해당 객체의 키 값과 동일한 props 객체 내 값을 바탕으로
     * 조건부적인 컴포넌트 선택을 할 수 있다.
     */
    // {
    //   path: '/user/:id',
    //   components: { default: User, sidebar: Sidebar },
    //   props: { default: true, sidebar: false }
    // },
    /**
     * 함수 형식으로 props를 지정할 수도 있다.
     * 이는 전달인자 $route.params 값을 원하는 이름의 props로 변경하는데 유용하다.
     * 예를 들어 /abc?foo=bar 쿼리를 { bar: bar }와 같은 props로 변경해 전달한다.
     */
    // {
    //   path: '/abc',
    //   component: AbortController,
    //   props: (route) => ({ bar: route.query.foo }),
    // },
    /**
     * meta 속성은 사용자가 원하는 메타 정보를 입력하게 한다. 이렇게 입력된 메타값은 네비게이션 가드에서
     * to.meta.META_KEY 형식으로 불러 사용할 수 있다. 가장 많이 활용되는 부분이 로그인이 필요한 라우팅인지
     * 아닌지 구별하는 것이다.
     */
    // {
    //   path: '/abc',
    //   component: Abc,
    //   meta: { need_login: true },
    // },
    /**
     * /abc/foo라면 foo에 대한 경로는 abc의 chilren에 들어가야 한다.
     */
    // {
    //   path: '/abc',
    //   component: Abc,
    //   children: [
    //     {
    //       path: 'foo',
    //       component: Foo,
    //     },
    //   ],
    // },
  ],
});

// meta를 검사하기 위해서 다음과 같은 형식으로 작성
// const logged_in = false;
// router.beforeEach((to, from) => {
//   // 로그인이 안되어 있으면 /login으로 경로를 변경한다.
//   if (to.meta.need_login && !logged_in) {
//     return { path: '/login' };
//   }
// });

export default router;
