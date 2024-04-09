// import React, { useEffect, useState } from "react";
// import { FaBeer, FaAirbnb } from "react-icons/fa";
// import { Routes, Route, NavLink } from "react-router-dom";
// import MainPage from "./page/main/MainPage";
// import ViewPostPage from "./page/view/ViewPostPage";
// import axios from "axios";
// import "./assets/css/style.scss";

// function App() {
//   const mainMenu = [
//     { name: "홈으로", url: "/" },
//     { name: "회사소개", url: "#" },
//     { name: "제품소개", url: "#" },
//     { name: "온라인문의", url: "#" },
//     { name: "커뮤니티", url: "/posts/1" },
//   ];

//   const [userData, setUserData] = useState([]); //초기값없음
//   const [userIdData, setUserIdData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     //두번째
//     async function viewData() {
//       try {
//        c await axios.get("https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10")

//           .then((v) => {
//             // v : axios를 통해 서버로부터 받아온 응답 객체
//             console.log(v.data);
//             setUserData(v.data);
//             // userData 값을 v.data로 바꿔줌
//           })
//           .catch((error) => {
//             console.log(error);
//           });

//         setTimeout(() => {
//           // 세번째
//           setLoading(false);
//           //loading을 false로 변경
//         }, 1000);
//       } catch (error) {
//         console.log(error);
//         setLoading(false);
//         //loading을 false로 변경
//       }
//     }
//     viewData();
//   }, []);
//   // [] : 한번만호출

//   return (
//     <>
//       <div className="header">
//         <div className="container">
//           <h1>로고</h1>
//           <nav>
//             <ul>
//               {mainMenu.map((item, i) => {
//                 return (
//                   <li key={i}>
//                     <NavLink to={item.url}>{item.name}</NavLink>
//                   </li>
//                 );
//               })}
//             </ul>
//           </nav>
//           <div>
//             <ul>
//               <li>
//                 <FaBeer />
//               </li>
//               <li>
//                 <FaAirbnb />
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {loading ? (
//         // 첫번째
//         <div className="loading">로딩중</div>
//       ) : (
//         // setLoading(false) loading이 false일때 아래 실행
//         // 네번째
//         <Routes>
//           {/* path에들어올걸 element로 연결 */}
//           <Route path="/" element={<MainPage listData={userData} />} />
//           {/* userData가 listData에 데이터 전달       props */}
//           <Route
//             path="/posts/:id"
//             element={<ViewPostPage listData={userData} />}
//           />
//         </Routes>
//       )}
//     </>
//   );
// }

// export default App;

import React, { useEffect, useState } from "react";
import { FaBeer, FaAirbnb } from "react-icons/fa";
import { Routes, Route, NavLink } from "react-router-dom";
import MainPage from "./page/main/MainPage";
import ViewPostPage from "./page/view/ViewPostPage";
import axios from "axios";
import "./assets/css/style.scss";

function App() {
  const mainMenu = [
    { name: "홈으로", url: "/" },
    { name: "회사소개", url: "#" },
    { name: "제품소개", url: "#" },
    { name: "온라인문의", url: "#" },
    { name: "커뮤니티", url: "/posts/1" },
  ];

  const [userData, setUserData] = useState([]); //초기값없음
  const [postData, setpostData] = useState([]); //초기값없음
  // const [userIdData, setUserIdData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //두번째
    async function viewData() {
      try {
        // 포스트 데이터 가져오기
        const postDataResponse = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        const postData = postDataResponse.data;
        setPostData(postData);

        // 유저 데이터 가져오기
        const userDataResponse = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${postData.userId}`
        );
        const userData = userDataResponse.data;
        setUserData(userData);

        then((v) => {
          // v : axios를 통해 서버로부터 받아온 응답 객체
          console.log(v.data);
          setUserData(v.data);
          // userData 값을 v.data로 바꿔줌
        }).catch((error) => {
          console.log(error);
        });

        setTimeout(() => {
          // 세번째
          setLoading(false);
          //loading을 false로 변경
        }, 1000);
      } catch (error) {
        console.log(error);
        setLoading(false);
        //loading을 false로 변경
      }
    }
    viewData();
  }, []);
  // [] : 한번만호출

  return (
    <>
      <div className="header">
        <div className="container">
          <h1>로고</h1>
          <nav>
            <ul>
              {mainMenu.map((item, i) => {
                return (
                  <li key={i}>
                    <NavLink to={item.url}>{item.name}</NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div>
            <ul>
              <li>
                <FaBeer />
              </li>
              <li>
                <FaAirbnb />
              </li>
            </ul>
          </div>
        </div>
      </div>

      {loading ? (
        // 첫번째
        <div className="loading">로딩중</div>
      ) : (
        // setLoading(false) loading이 false일때 아래 실행
        // 네번째
        <Routes>
          {/* path에들어올걸 element로 연결 */}
          <Route path="/" element={<MainPage listData={userData} />} />
          {/* userData가 listData에 데이터 전달       props */}
          <Route
            path="/posts/:id"
            element={<ViewPostPage postData={postData} userData={userData} />}
          />
        </Routes>
      )}
    </>
  );
}

export default App;
