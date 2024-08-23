import React, { useState } from "react";

const Ex3 = () => {
  // 전역변수
  // useState : 변수값이 바뀔 때 마다 화면에 반영하기 위해 사용
  const [vo, setVo] = useState({
    name: "",
    email: "",
    tel: "",
  });

  const { name, email, tel } = vo;
  // name = vo.name
  // email = vo.email
  // tel = vo.tel

  // 이름 변경 함수
  //const {name, email, tel} = vo;
  function setNameValue(e) {
    // const setValue = (e) => {

    let value = e.target.value;
    // let id = e.target.id; -> 이벤트를 분리 했으므로 id가 뭔지 알려줄 필요 없으므로 삭제

    // useState에 선언된 Setter 이용해서 값을 변경해야 re rendering이 됨
    setVo({
      ...vo, // ... => 스프레이드 속성이라 함. vo 를 하나 복사해 놓는 개념 -> 복사해서 원하는 부분만 변경할 수 있도록 하기 위해

      // [id]: value, -> id 구분할 필요X
      name: value,
    });
  }

  // 이메일 변경 함수
  function setEmailValue(e) {
    let value = e.target.value;

    setVo({
      ...vo,

      email: value,
    });
  }

  // 전화번호 변경 함수
  function setTelValue(e) {
    let value = e.target.value;

    setVo({
      ...vo,

      tel: value,
    });
  }

  return (
    <div>
      <p>이벤트 분리</p>
      <div>
        <label>이름</label>
        <input type="text" id="name" value={name} onChange={setNameValue} />
      </div>
      <div>
        <label>이메일</label>
        <input type="email" id="email" value={email} onChange={setEmailValue} />
      </div>
      <div>
        <label>전화번호</label>
        <input type="tel" id="tel" value={tel} onChange={setTelValue} />
      </div>
      <p> 이름: {name}</p>
      <p> 이메일: {email}</p>
      <p> 전화번호: {tel}</p>
    </div>
  );
};
export default Ex3;
