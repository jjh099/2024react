import React, { useEffect, useState } from "react";
import "./assets/css/style.scss";

function App() {
  const [num, setNum] = useState(1);
  const [inpData, setInpData] = useState("");
  const [myData, setMyData] = useState(); //저장소

  console.log("자료변경");
  useEffect(() => {
    console.log("이펙트");
  }, [myData]);
  // [] = 컴퍼넌트가 실행될때 한번만 실행되게 해줌
  // useEffect (()=>{},[])
  // useEffect(function(){},[]) 위에랑 똑같은거
  //     함수형  콜백
  //컴퍼넌트가 실행될 때 프로그램이 실행되게 해주는 것

  function inpChange(e) {
    //      e=인자값,이벤트
    console.log(e.target.value);
    setInpData(e.target.value);
  }

  function sendData() {
    setMyData(inpData);
  }
  return (
    <>
      {num} / {inpData}
      <div>
        <button
          onClick={() => {
            setNum(2);
          }}
        >
          클릭
        </button>

        <div>
          <input type="text" onChange={inpChange} value={inpData} />
          <button onClick={sendData}>자료전송</button>
          <br />
          자료전송내용{myData}
        </div>
      </div>
    </>
  );
}

export default App;
