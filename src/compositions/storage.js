/**
 * 반응성을 더해줄 reactive와 toRefs 함수를 vue에서 import한다.
 * reacitive는 객체에 반응성을 더해주는 함수
 * toRefs는 객체의 내부 속성들 모두에게 반응성을 더해준다.
 */
import { reactive, toRefs } from 'vue';

/**
 * 컴포지션 API로 만들어진 모듈의 이름은 일반적으로 use를 앞에 붙인다. 이는 컴포지션 API로 만들어진 모듈을 compositions 폴더에
 * 넣는 것과 비슷한 맥락으로, 강제사항은 아니다.
 */
export const useStorage = () => {
  /**
   * KEY: localstorage에서 데이터를 저장할 KEY
   * storage_obj: 일정 리스트를 가질 todos 속성과 신규 id를 책정할 수 있는 storage_id 속성을 가진 객체
   * loadTodos: localStorage로부터 데이터를 불러오는 함수
   * saveTodos: localStorage로 데이터를 저장하는 함수
   */
  const KEY = 'seong-hun-todo-list';
  /**
   * stoage_obj는 객체이므로 반응성을 갖게 하기 위해 reacitve함수를 이용했다.
   * 이 함수를 이용하지 않으면 데이터의 변경을 Vue Virtual DOM이 알아차릴 수가 없다.
   * Vue는 선언적 방식으로 데이터의 변화를 감지하는데, 이를 위해서는 객체가 반응성을 가져야 한다.
   */
  const storage_obj = reactive({ storage_id: 0 });
  const loadTodos = (initTodos) => {
    let temp_todos = JSON.parse(localStorage.getItem(KEY) || '[]');
    temp_todos.forEach((todo, idx) => (todo.id = idx));
    storage_obj.storage_id = temp_todos.length;
    initTodos(temp_todos);
  };

  const saveTodos = (todos) => {
    localStorage.setItem(KEY, JSON.stringify(todos.value));
  };

  return {
    // toRefs: 객체의 내부 속성들 모두에게 반응성을 더해준다.
    ...toRefs(storage_obj),
    loadTodos,
    saveTodos,
  };
};
