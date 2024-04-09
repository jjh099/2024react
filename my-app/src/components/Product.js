import React from "react";
import { useParams } from "react-router-dom";

function Product(props) {
  const { item } = useParams();

  let myData = props.vData.find(function (x) {
    return x.id == item;
  });
  // props.vData 배열에서 id속성이 item값과 동일한 첫번째 요소를 찾아 변수 mydata에 할당 찾지못하면 mydata에는 undfined가 할당

  console.log(myData);

  return (
    <>
      <div className="subVisual">product</div>
      <div className="container subPro">
        <h3>{myData.title} </h3>
        <hr />
        <div className="content">
          <img src={`../images/${myData.img}`} alt="" />
          <p>{myData.content} </p>
        </div>
      </div>
    </>
  );
}

export default Product;
