import React from "react";

function Myprops({ 작명, 상품, test1 }) {
  console.log(작명);
  return (
    <>
      {/* <div className="wrap">
          Myprops
          <br />
          {props.작명}
          {props.상품[0].img}
          <div className="imgWrap">
            <img src={`./image/${props.상품[0].img}`} />
          </div>
        </div> */}

      <div className="wrap">
        test/
        {작명}
        <div className="imgWrap">
          {/* <img src="./image/test.jpg" /> */}
          <img src={`./image/${상품[0].img}`} />
        </div>
        <button onClick={test1}>클릭</button>
      </div>
    </>
  );
}

export default Myprops;
