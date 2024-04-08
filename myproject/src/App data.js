import React, { useEffect, useState } from "react";
import "./assets/css/style.scss";

import Myprops from "./componets/Myprops";

function App() {
  const [myData, setMyData] = useState(10);
  const product = [
    {
      title: "상품1 ",
      price: 1000,
      img: "test.jpg",
    },
    { title: "상품2 ", price: 1000, img: "test.jpg" },
  ];

  function test() {
    console.log("test");
  }

  return (
    <>
      <div className="wrap">
        test
        <Myprops 작명={myData} 상품={product} test1={test} />
      </div>
    </>
  );
}

export default App;
