import React from "react";

export default Header = () => {
  return (
    <header>
      <h1>TOMATO Planner</h1>
      <h2>할일 리스트</h2>
      <nav>
        <h3>내비게이션</h3>
        <button>할일 추가하기</button>
        <ul>
          <li>할일</li>
          <li>목표</li>
          <li>통계</li>
          <li>스케줄</li>
        </ul>
      </nav>
    </header>
  );
};
