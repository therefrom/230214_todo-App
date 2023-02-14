// TodoCreate는 할일을 입력하는 input 칸입니다
import React from "react";
import styled from 'styled-components';
import { MdAddCircle } from "react-icons/md";

const TodoCreateBox = styled.div`
  .background {
    z-index: 800px;
    position: fixed;
    top:0; left: 0; bottom: 0; right: 0;
    background: rgba(0, 0, 0, 0.2);
  }
  .modal {
    z-index: 900px;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: white;
    width: 300px;
    height: 150px;
    border-radius: 5px;
  }
`

function TodoCreate( {onCreateToggle} ) {
  return (
    <TodoCreateBox>
      <div className="background" onClick={onCreateToggle}>
        <form className="modal">
          <input></input>
          <button type="제출하기" onClick={onCreateToggle}>제출하기</button>
        </form>
      </div>
    </TodoCreateBox>
  )
};

export default TodoCreate;