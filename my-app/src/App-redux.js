import React from "react";
import "./assets/css/tStyle.scss";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";

//persist 설정 lib
import { persistStore, presistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import persistReducer from "redux-persist/es/persistReducer";

//               인자값(매개변수) 스테이트값이 변함(스테이트=이니셜스테이트)) 자식이 신호를 보내면 액션값이 나옴 자식->action->state 변경
function reducer(state = initalstate, action) {
  // console.log("init data : " + state.num);
  console.log(action);
  if (action.type === "numUp") {
    return {
      ...state,
      num: state.num + action.payload,
      title: state.title + action.payload,
    };
  }

  if (action.type === "titleModi") {
    return {
      ...state,
      title: action.payload,
    };
  }
  return state;
}

// 이니셜스테이트에 있는 데이터를 사용하고 싶을때는 const title = use selector로 가져와서 사용
const initialState = {
  num: 100,
  title: "안녕하세요",
  content:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, eligendi sit. Porro nobis, aperiam doloribus mollitia aut soluta? Accusamus, maxime!",
};

//persist 구성
const persistConfig = {
  key: "root",
  storage,
};

// const presistReducer = persistReducer(persistConfig, reducer);

// const store = createStore(reducer, initialState);
// 크리에이트스토어에 리듀서랑 초기값 담아줌
// const store = createStore(presistReducer);
const store = creatStore(reducer);

// const persitor = persistStore(store);

// 스토어가 자식들에게 값을 뿌려줌
// 프로바이더로 감싸주고 스토어에 데이터 담아줌
function App() {
  return (
    <>
      <div>
        <Provider store={store}>
          <div className="border p-4">
            <h3>title1</h3>
            <ChildOne />
          </div>
        </Provider>
      </div>
    </>
  );
}

function ChildOne() {
  const title = useSelector((state) => {
    return state.title;
  });
  return (
    <>
      <div className="border p-4">
        <h3>childone {title} </h3>
        <ChildeTwo />
      </div>
    </>
  );
}

// state를 받아서 staet.num 값을 num에 넣겠다
function ChildeTwo() {
  //   const num = useSelector((state) => {
  //     return state.num;
  //   });
  //   const contnet = useSelector((state) => {
  //     return state.content;
  //   });

  // const {num,content} = useSelector((state)=> {return state})

  const { num, content, title } = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log(" child trans : " + num);
  return (
    <>
      <div className="border p-4">
        <h3>childtwo</h3>
        number({num}) <br />
        title : {title} <br />
        <button
          className=" bg-blue-300 px-4 py-1 rounded-md hover:bg-blue-500 hover:text-white"
          onClick={() => {
            dispatch({ type: "numUp", payload: 1 });
          }}
        >
          아주쉬운클릭
        </button>
        <button
          onClick={() => {
            dispatch({ type: "titleMode", payload: "title변경됨" });
          }}
        >
          글자변경
        </button>
        {/* content : {content} */}
      </div>
    </>
  );
}

export default App;
