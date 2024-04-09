import React from "react";

function Main({ vData }) {
  return (
    <div>
      <div className="visual d-flex">mainVisual</div>

      <div className="container">
        <ul className="proList">
          {vData.slice(0, 4).map((item, idx) => {
            //vData에 0~4번까지만
            // item : vData의 각 요소를 나타내는 변수
            // idx : index 배열 요소 위치
            return (
              <li>
                <a href={`./pro/${item.id}`}>
                  <img src={`./images/${item.img}`} alt="" />
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Main;
