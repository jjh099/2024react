import React from "react";
import "./assets/css/tStyle.scss";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const counterStore = createSlice({
  name: "countNum",
  initialState: { num: 100, title: "안녕하세요" },
  reducers: {
    //메소드
    up: (state, action) => {
      state.num = state.num + action.payload;
    },
  },
});
const counterStore1 = createSlice({
  name: "countNum1",
  initialState: { num1: 300 },
  reducers: {
    //메소드
    up: (state, action) => {
      state.num1 = state.num1 + action.payload;
    },
  },
});

const store = configureStore({
  //conunterStore 담겨져있음
  reducer: {
    counter: counterStore.reducer, //슬라이스 counterStore
    counter1: counterStore1.reducer, //슬라이스 counterStore1
  },
});
function App() {
  return (
    <Provider store={store}>
      <div>
        <h3>test</h3>
        <ChildOne />
      </div>
      ;
    </Provider>
  );
}

function ChildOne() {
  const dispatch = useDispatch(); //부모한테 신호 보내서 값을 받아옴 부모한테 바로 갈 수 있음 props는 단게별로 거쳐서 부모한테 가야함
  // const num = useSelector((state) => {
  //   return state.counter.num;
  // });
  const num = useSelector((state) => state.counter.num);
  const title = useSelector((state) => state.counter.title);
  const num1 = useSelector((state) => state.counter1.num1);
  return (
    <div>
      <h3>
        ChildOne /{title} {num} / {num1}{" "}
      </h3>
      <button
        onClick={() => {
          dispatch(counterStore.actions.up(1));
        }}
      >
        클릭one
      </button>
      <button
        onClick={() => {
          dispatch(counterStore1.actions.up(100));
        }}
      >
        클릭two
      </button>
    </div>
  );
}

export default App;
