// TodoCreate는 할일을 입력하는 input 칸입니다
import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { MdClose } from "react-icons/md";

const TodoCreateBox = styled.div`
  .background {
    z-index: 980px;
    position: fixed;
    top:0; left: 0; bottom: 0; right: 0;
    background: rgba(0, 0, 0, 0.2);
  }

  form {
    z-index: 990px;
    width: 300px;
    height: 180px;
    padding: 30px;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    border-radius: 12px;
  }
  form > .closeButton {
    font-size: 22px;
    text-align: end;
  }
  form > input {
    background: none;
    outline: none;
    border: none;
    border-bottom: 1px solid #d1d6db;
    font-size: 18px;
    margin-top: 30px;
    width: 100%;
  }

  form > button {
    margin-top: 30px;
    padding: 10px 16px;
    background-color: #e8f3ff;
    color: #1b64da;
    font-size: 14px;
    font-weight: 600;
    vertical-align: middle;
    border: none;
    border-radius: 10px;

    cursor: pointer;
    :hover {
      background-color: #c9e2ff;
    }
  }
`

function TodoCreate({ onCreateToggle, onCreateTodo, selected }) {
  const [value, setValue] = useState(""); // 입력폼 상태 관리
  const onChange = e => { // 입력폼에 입력하는 값에 따라 변경
    setValue(e.target.value);
  }
  const onSubmit = (e) => {
    e.preventDefault(); // 새로고침 막아주는 함수
    onCreateTodo(value);
    setValue("");
    onCreateToggle();
  }

  useEffect(()=>{
    if (selected) {
      setValue(selected.text)
    }
  }, [selected]);

  return (
    <TodoCreateBox>
      <div className="background">
        <form onSubmit={onSubmit}>
          <div className="closeButton"><MdClose onClick={onCreateToggle} /></div>
          <input
            placeholder="오늘 할 일은 무엇인가요?"
            value={value}
            onChange={onChange} />
          <button type="submit">작성하기</button>
        </form>
      </div>
    </TodoCreateBox>
  )
};

export default TodoCreate;