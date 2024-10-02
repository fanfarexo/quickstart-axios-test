import axios from "axios";

//! Promise(ES6 비동기 처리 패턴)

type TodoType = {
  id: number;
  todo: string;
  desc: string;
  done: boolean;
};

const listUrl = "/api/todolist_long/gdhong";
const todoUrlPrefix = "/api/todolist_long/gdhong/";

const requestAPI = () => {
  let todoList: Array<TodoType> = [];

  axios
    .get(listUrl)
    .then((response) => {
      todoList = response.data;
      console.log("# TodoList : ", todoList);
      return todoList[0].id;
    })
    .then((id) => {
      return axios.get(todoUrlPrefix + id);
    })
    .then((response) => {
      console.log("## 첫 번째 Todo : ", response.data);
      return todoList[1].id;
    })
    .then((id) => {
      axios.get(todoUrlPrefix + id).then((response) => {
        console.log("## 두 번째 Todo : ", response.data);
      });
    });
};
requestAPI();

const App = () => {
  return (
    <div>
      <h2>Console.log를 확인하세요.</h2>
    </div>
  );
};

export default App;
