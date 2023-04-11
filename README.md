# vue3-vite-pratice

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
yarn
yarn install
```

### Run Server
```sh
node database/index.js
```

### Compile and Hot-Reload for Development

```sh
yarn dev
```

### Compile and Minify for Production

```sh
yarn build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
yarn test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
yarn lint
```

## Vue3 부모에서 자식 컴포넌트에게 데이터 전달

### provide/inject

```javascript
provide: { my_project: object.propery};
provide: {
    return {
        my_property: object.property;
    }
}
```

## Vue3 관련 API

| No  |       API       | 설명                                                                                                                                                                                                                                           |
| :-: | :-------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  1  |    reactive     | 객체의 속성들이 반응성을 갖게 만들어준다. 일반적으로 기본 자료형 변수(Primitive Variable)가 반응성을 갖도록 할 때 ref 함수를 이용하는데, 객체의 속성으로 변수들을 모아 reactive를 사용하면 변수의 개수가 많을 때 매우 유리하게 사용할 수 있다. |
|  2  |    readonly     | 일반 객체나 프록시 객체를 읽기전용 프록시로 변경한다. 기본적으로 객체 내 모든 속성을 읽기전용으로 변경한다.                                                                                                                                    |
|  3  |     isProxy     | 인자로 들어온 변수가 reactive나 readonly 등으로 만들어진 프록시 객체인지 확인해준다.                                                                                                                                                           |
|  4  |   isReactive    | reacitve로 생성된 프록시 객체인지 확인해준다. 재미있는 것은, reacitve의 반환 프록시 객체를 다시 readonly로 반환한 프록시 객체에도 tru값을 반환한다는 것이다. 예를 들어 다음과 같은 것을 의미한다. <pre>readonly(reactive({ id: 0 }))</pre>     |
|  5  |   isReadonly    | readonly로 생성된 프록시 객체인지 확인해준다.                                                                                                                                                                                                  |
|  6  |      toRaw      | reactive와 readonly로 만들어진 프록시 객체를 원래 객체로 원복시킨다.                                                                                                                                                                           |
|  7  |     markRaw     | markRaw로 생성된 객체는 reacitve나 readonly를 통해서 프록시 객체로 생성되지 않는다.                                                                                                                                                            |
|  8  | swallowReactive | 참조되는 객체의 직게 속성에만 reactive를 부여하고 내부에 중첩된 객체에는 reactive를 부여하지 않는다.<pre>const state = shallowReactive({<br> foo:1, // Reactive <br> nested: { bar: 2 } // Reactive가 아니다!<br>})</pre>                      |
|  9  | shallowReadonly | shallowReactive와 마찬가지로 직계 속성만 readonly 처리한다.                                                                                                                                                                                    |

## Vue3 Refs

| No  |    API     | 설명                                                                                                                                                                                                                                                      |
| :-: | :--------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  1  |    ref     | 전달받은 기본 자료형 변수 반응형 객체로 변경한다. 이 객체의 value 속성을 통해서 값을 자유롭게 변경할 수 있다. 일반적으로 이렇게 나온 반응형 객체를 ref라 칭한다.                                                                                          |
|  2  |   unref    | ref를 다시 일반 변수로 바꾼다. 내부적으로 프록시 객체에서 분리하는 과정을 진행한다.                                                                                                                                                                       |
|  3  |   toRef    | reactive API로 생성된 객체의 속성을 ref를 이용해 반응형 객체로 생성한다. toRef(object, 'propert')                                                                                                                                                         |
|  4  |   toRefs   | toRef를 해당 객체의 모든 속성에 적용한다.                                                                                                                                                                                                                 |
|  5  |   isRef    | ref 객체인지 확인한다.                                                                                                                                                                                                                                    |
|  6  | customRef  | track 함수와 trigger 함수를 인자로 받고 get과 set 함수를 리턴하는 사용자 지정 ref를 생성한다. get 함수에서 사용자가 필요한 일을 완료한 후 track 함수를 불러주면 되고, set 함수에서 사용자가 정의한 일을 마무리 한 후 trigger 함수를 호출하게 만들면 된다. |
|  7  | shallowRef | 참조된 객체의 value가 통째로 변경될 때만 반응형으로 작동한다.                                                                                                                                                                                             |
|  8  | trggerRef  | shallowRef로 참조된 객체에 대한 업데이트를 강제로 일으킨다.                                                                                                                                                                                               |

## Option API와 컴포지션 API의 생명주기

| No  | Options API의 생명주기 | 컴포지션 API의 생명주기 |
| :-: | :--------------------- | :---------------------- |
|  1  | beforeCreate           | setup 함수 자체         |
|  2  | created                | setup 함수 자체         |
|  3  | beforeMount            | onBeforeMount           |
|  4  | mounted                | onMounted               |
|  5  | beforeUpdate           | onBeforeUpdate          |
|  6  | updated                | onUpdated               |
|  7  | beforeUnmount          | onBeforeUnmount         |
|  8  | unmounted              | onUnmounted             |
|  9  | errorCaptured          | onErrorCaptured         |
| 10  | renderTracked          | onRenderTracked         |
| 11  | renderTriggered        | onRenderTriggered       |

## Vue 3의 Application API들

| No  | Vue2 전역 API               | Vue3 Appliation API        |
| :-: | :-------------------------- | :------------------------- |
|  1  | Vue.config                  | app.config                 |
|  2  | Vue.config.productionTip    | 삭제됨                     |
|  3  | Vue.config.ignoreedElements | app.config.isCustomElement |
|  4  | Vue.component               | app.component              |
|  5  | Vue.directive               | app.directive              |
|  6  | Vue.mixin                   | app.mixin                  |
|  7  | Vue.use                     | app.use                    |