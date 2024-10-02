import axios from "axios";

/*
  ! axios 라이브러리 사용법 : axios.get() 함수 
  * 응답 객체가 가지고 있는 6가지 속성 → https://axios-http.com/kr/docs/req_config
  "config": 요청 시에 사용된 config 옵션
  "data": 수신된 응답 데이터
  "status": 서버가 응답한 HTTP 상태 코드
  "statusText": 서버의 HTTP 상태를 나타내는 문자열 정보
  "headers": 백엔드 API 서버가 응답할 떄 사용된 응답 HTTP 헤더
  "request": 서버와의 통신에 사용된 XMLHttpRequest 객체의 정보
 */

// [ 사용예시 : promise ]
const requestAPI_promise = () => {
  const url = "/api/todolist/gdhong";
  axios.get(url).then((response) => {
    console.log("# Promise 응답 객체 : ", response);
  });
};

// [ 사용예시 : async-await ]
const requestAPI_async_await = async () => {
  const url = "/api/todoList_long/gdhong";
  const response = await axios.get(url);
  console.log("# Async-Await 응답 객체 : ", response);
};

requestAPI_promise();
requestAPI_async_await();

const App = () => {
  return (
    <>
      <h2>Console.log를 확인합니다.</h2>
    </>
  );
};

export default App;
