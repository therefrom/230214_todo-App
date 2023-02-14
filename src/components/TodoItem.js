// TodoItem은 할일 하나하나의 목록과 삭제 버튼입니다.

import React from 'react';
import styled from 'styled-components';
import { MdCheckCircleOutline, MdCheckCircle} from 'react-icons/md'

const TodoItemBox = styled.div`
  
  padding: 13px 0px;
  border-bottom: 1px solid #000000;
  flex: 1;
  font-size: 20px;

  .content {
    // 와
    cursor: pointer;
    flex: 1;
    display: flex;
    align-items: center;
  }

  .content.checked .text {
    // 완료한 작업 글자
    color: gray;
    text-decoration: line-through;
    opacity: 50%;
  }
`

function TodoItem( {todo} ) {
  const { text, checked } = todo;
  
  return (
    <TodoItemBox>
      <div className={`content ${checked ? 'checked' : ''}`}>
        {checked ? <MdCheckCircle /> : <MdCheckCircleOutline />}
        <div className='text'>{text}</div>
      </div>
    </TodoItemBox>
  )
}

export default TodoItem;