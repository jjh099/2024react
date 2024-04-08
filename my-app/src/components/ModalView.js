import React from "react";

function ModalView(props) {
  console.log(props);
  return (
    <>
      <div className="modalWrap">
        <div className="modal">
          <button onClick={props.onClick} className="close">
            닫기
          </button>

          <div className="modalBody">
            <h3>{props.viewListData[props.vNum].title}</h3>
            <p>{props.viewListData[props.vNum].content}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalView;
