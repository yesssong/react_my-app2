import React, { useState } from "react";

const Ex1 = () => {
  // 상태관리 변수
  let [txt, setTxt] = useState(""); // useState : setter 자동 생성해줌

  function setValue(e) {
    // const setValue = (e) => {
    // 입력값을 가져와서 setTxt 통해서 txt 변수에 넣겠다
    // 값을 가져옴 + re rendering 함 => 값을 변경
    setTxt(e.target.value); // 이벤트를 발생시킨 타겟의 value 가져옴
    // txt = e.target.value; -> 이렇게는 못 쓰나?? YES 재렌더링이 안 되기 때문 = 바뀐 값은 들어가는데 화면 갱신이 안됨(console 창 보면 메세지 창에서 입력한 값이 들어가는 것 확인 가능 but 화면은 안 바뀜)
    console.log(txt);
  }

  return (
    <div>
      <p>Ex1 화면입니다</p>
      {/* 이벤트 발생 시 setValue 함수 호출하겠다 */}
      <input type="text" value={txt} onChange={setValue} />
      <br />
      <p>{txt}</p>
    </div>
  );
};

export default Ex1;
