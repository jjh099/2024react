import React, { useState } from "react";
import "./assets/css/style.css";

// const num =10 // num : 출력 , 전역변수
function App() {
  let [mView, setMView] = useState(false);
  function modalView() {
    // alert("test");
    setMView(true);
  }

  function modalClose() {
    setMView(false);
  }
  return (
    <>
      <div>
        {/* <button className="btn primary" onClick={()=>{setMView(true)}}>모달창열기</button> */}
        {/* <button className="btn primary" onClick={()=>{modalview()}}>모달창열기</button> */}
        <button className="btn primary" onClick={modalView}>
          모달창열기
        </button>
      </div>
      {mView == true ? <Modal onclick={modalClose} /> : null}
      {/* <Modal /> Modal을 가져와서 사용 */}
    </>
  );
}

function Modal(props) {
  return (
    <>
      <div className="modalWrap">
        <div className="modal">
          모달창
          {/* <button
            onClick={() => {
              setMView(false);
            }}
          >
            닫기
          </button> */}
          <button onClick={props.onclick}>닫기</button>
        </div>
      </div>
    </>
  );
}

export default App;
