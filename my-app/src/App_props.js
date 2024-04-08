import React, { useState } from "react";
import "./assets/css/style.css";

// const num =10 // num : 출력 , 전역변수
function App() {
  // const num = 30; //function 안에 있는 건 지역변수라 child 함수에선 사용 불가능함
  // let num= 20;
  let [num, setNum] = useState(10);
  return (
    <>
      <div className="wrap">
        부모컨테이너 {num}
        <button
          onClick={() => {
            setNum(20);
          }}
        >
          숫자변경
        </button>
        <Child1 넘버={num} />
      </div>
    </>
  );
}

function Child1(props) {
  console.log(props);
  return (
    <>
      <div className="wrap">
        자식컨테이너1 {props.넘버}
        <Child2 childnum={props.넘버} />
      </div>
    </>
  );
}

function Child2(props) {
  return (
    <>
      <div className="wrap">자식컨테이너2 {props.childnum}</div>
    </>
  );
}

export default App;
