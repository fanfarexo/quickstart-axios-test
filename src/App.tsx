import axios from "axios";

const requestAPI = () => {
  const url = "https://todosvc.vercel.app/todolist/gdhong";
  axios.get(url).then((responst) => {
    console.log("# 응답 객체 : ", responst);
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
