import React, { useState } from "react";

const Ex2 = () => {
  const [vo, setVo] = useState({
    name: "",
    email: "",
    tel: "",
  });

  //const {name, email, tel} = vo;
  function setValue(e) {
    // const setValue = (e) => {

    let value = e.target.value;
    let id = e.target.id;

    setVo({
      ...vo, // ... => 스프레이드 속성이라 함. vo 를 하나 복사해 놓는 개념 -> 복사해서 원하는 부분만 변경할 수 있도록 하기 위해
      [id]: value, // id가 변수로 들어옴 name or email or tel
    });
  }

  return (
    <div>
      <div>
        <label>이름</label>
        <input type="text" id="name" value={vo.name} onChange={setValue} />
      </div>
      <div>
        <label>이메일</label>
        <input type="email" id="email" value={vo.email} onChange={setValue} />
      </div>
      <div>
        <label>전화번호</label>
        <input type="tel" id="tel" value={vo.tel} onChange={setValue} />
      </div>
      <p> 이름: {vo.name}</p>
      <p> 이메일: {vo.email}</p>
      <p> 전화번호: {vo.tel}</p>
    </div>
  );
};

export default Ex2;
