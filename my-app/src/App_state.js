// eslint-disable
import { useState } from "react";
import "./App.css";

function App() {
  const 내용 = "test";
  const styleText = { fontSize: "2em", color: "red" };
  const btnClick = function () {
    console.log("test");
  };

  const [title, setTitle] = useState(["seoul", "busan", "degu"]);

  const changData = () => {
    const newArray = [...title]; //깊은복사
    newArray[0] = "inchon";
    setTitle(newArray);
  };

  const [num, setNum] = useState(0);
  const changNum = () => {
    setNum(1);
  };
  const zeroNum = () => {
    setNum(1);
  };

  const [myNum, setMyNum] = useState(0);
  return (
    <>
      {num}
      {/* <div className="text" style={{ fontSize: "2em",color:"red" }}>  div에 스타일 직접 넣기 */}
      <div className="text" style={styleText}>
        {/* <button onClick={function(){
          console.log("test")
        }} } //아래랑 같은거임 */}
        <button onClick={changData}>클릭</button>
      </div>

      <button onClick={changeNum}></button>
      <button onClick={zeroeNum}></button>

      <div>
        {title[0]}{" "}
        <span
          onClick={() => {
            setMyNum;
          }}
          style={{ cursor: "pointer" }}
        >
          {" "}
        </span>{" "}
        {myNum}
      </div>
    </>
  );
}

export default App;
