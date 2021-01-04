import React from "react";
import { Link } from "react-router-dom";

export default Nav = () => {
  return (
    <nav>
      <button>할일 추가하기</button>
      <ul>
        <li>
          <Link to="./">할일</Link>
        </li>
        <li>
          <Link to="./">목표</Link>
        </li>
        <li>
          <Link to="./">통계</Link>
        </li>
        <li>
          <Link to="./">스케줄</Link>
        </li>
      </ul>
    </nav>
  );
};
