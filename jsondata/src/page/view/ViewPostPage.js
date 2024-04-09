import React from "react";
import { useParams } from "react-router-dom";

function ViewPostPage(props) {
  const { id } = useParams();
  if (props.listData.length == 0) {
    return "자료가 없음";
  }
  const postId = parseInt(id, 10);

  let myData = props.listData.find(function (x) {
    return x.id == postId;
  });

  return (
    <div>
      <h3>{props.listData[postId].title}</h3>
      <hr />
      <p>{props.listData[postId].body}</p>
      <hr />
      <p>{props.listData[postId].body}</p>
    </div>
  );
}

export default ViewPostPage;
