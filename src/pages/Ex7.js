import React, { useState } from "react";
import styles from "../css/Ex7.module.css";
import data from "../data/data.json";
import Ex7Table from "./Ex7Table";

function Ex7() {
  //let id = 2;
  // 컴포넌트와 컴포넌트 데이터를 공유하기 위해서는 useState를 써야한다???
  const [id, setId] = useState(1);

  function setIdx(e) {
    //id = e.target.value;
    //console.log(e.target.value);
    setId(e.target.value);
  }

  return (
    <div>
      <ul className={styles.m_list}>
        {/* 메뉴 출력 */}
        {data.subject.map((sub) => (
          <li key={sub.id} onClick={setIdx} value={sub.id}>
            {sub.title}
          </li>
        ))}
      </ul>

      {/* (필터링 된) 데이터 출력 */}
      <Ex7Table idx={id} />
    </div>
  );
}
export default Ex7;
