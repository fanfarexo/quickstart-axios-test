import axios from "axios";

type TodoType = {
  id: number;
  todo: string;
  desc: string;
  done: boolean;
};

const listUrl = "/api/todolist_long/gdhong";
const todoUrlPrefix = "/api/todolist_long/gdhong/";

//* 4건의 목록을 조회한 후 첫 번째, 두 번째 Todo르 순차적으로 순회하며 조회하기
const requestAPI = async () => {
  let todoList: Array<TodoType> = [];

  // axios
  //   .get(listUrl)
  //   .then((response) => {
  //     todoList = response.data;
  //     console.log("# TodoList : ", todoList);
  //     return todoList[0].id;
  //   })
  //   .then((id) => {
  //     return axios.get(todoUrlPrefix + id);
  //   })
  //   .then((response) => {
  //     console.log("## 첫 번째 Todo : ", response.data);
  //     return todoList[1].id;
  //   })
  //   .then((id) => {
  //     axios.get(todoUrlPrefix + id).then((response) => {
  //       console.log("## 두 번째 Todo : ", response.data);
  //     });
  //   });
  let response = await axios.get(listUrl);
  todoList = response.data;
  console.log("# TodoList : ", todoList);
  for (let i = 0; i < todoList.length; i++) {
    response = await axios.get(todoUrlPrefix + todoList[i].id);
    console.log(`# ${i + 1}번째 Todo : `, response.data);
  }
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
