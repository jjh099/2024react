import React from "react";
import { connect } from "react-redux";

function MainPage({ listData }) {
  return (
    <div>
      <h3>blogList</h3>
      <hr />
      <ul>
        {listData.map((item, i) => {
          return <li key={i}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default MainPage;
