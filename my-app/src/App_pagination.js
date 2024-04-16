import React, { useEffect, useState } from "react";
import axios from "axios";
import "./assets/css/style.scss";

function App_pagination() {
  //  초기상태가 빈 배열인 viewData 변수 생성
  const [viewData, setViewData] = useState([]);

  // 초기상태가 1인 totalPages 변수 생성
  const [totalPage, setTotalPage] = useState(1);
  // totalPages변수/setTotalPages함수

  const [currentPage, setCurrentPage] = useState(1);
  const [listCnt, setListCnt] = useState(10);

  // useEffect는 React 함수 컴포넌트 내에서 부수 효과를 처리하기 위해 사용되는 훅
  // useEffect(()=>{부수효과를 정의하는 함수},[종속성 배열(useEffect의 실행 조건을 결정])
  // useEffect(()=>{},[배열의 값이 있으면]) 컴포넌트가 렌더링될 때마다 실행됨
  // useEffect(()=>{},[배열이 비어있으면]) 컴포넌트가 렌더링될 때 처음 한번만 실행됨

  useEffect(() => {
    axios
      // 몇페이지인지
      .get(
        `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${listCnt}`
      )
      .then((res) => {
        console.log(res);
        setViewData(res.data); // viewData 변수 빈 배열에 res.data 추가

        console.log(res.headers["x-total-count"]);
        let totalRecord = res.headers["x-total-count"];
        let totalPage = Math.ceil(totalRecord / listCnt);
        setTotalPage(totalPage);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [currentPage]);

  const pagNumber = () => {
    const pageNumbers = [];

    // const page = 5
    // let startPage = Math.floor((page-1)/pageCnt * pageCnt +1) ;
    // let endPage = startPage + pageCnt - 1;
    for (let i = 1; i <= 10; i++) {
      pageNumbers.push(
        <li key={i} onClick={() => setCurrentPage(i)}>
          {i}
        </li>
      );
    }

    return pageNumbers;
  };

  return (
    <>
      <div>
        {totalPage}
        {viewData.map((item) => {
          return (
            <>
              <div>{item.title}</div>
            </>
          );
        })}
      </div>

      <div className="pagination">
        <div>이전</div>
        {/* <ul className="page">{pageNumber()}</ul> */}
        <div>다음</div>
      </div>
    </>
  );
}

export default App_pagination;
