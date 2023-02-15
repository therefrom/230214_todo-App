// TodoItem은 할일 하나하나의 목록과 삭제 버튼입니다.
import React from 'react';
import styled from 'styled-components';
import { MdCheckCircleOutline, MdCheckCircle } from 'react-icons/md'

const TodoItemBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 13px 5px;
  border-bottom: 1px solid #e5e8eb;
  flex: 1;
  font-size: 18px;

  .content {
    cursor: pointer;
    flex: 1;
    display: flex;
    align-items: center;
  }

  // 완료하면 바뀌는 스타일
  .checked .text {
    // 완료한 작업 글자
    color: #d1d6db;
    text-decoration: line-through;
  }  
`
const Text = styled.div`
  // 리스트 서체 설정
  flex: 1;  
`
const TodoIcon = styled.div`
  // 할일 앞쪽의 체크박스 스타일
  margin-right: 5px;
  color: #3182f6;
  display: flex;
  align-items: center;
`

function TodoItem({ todo, onCheckToggle, onCreateToggle, onChangeSelected }) {
  const { id, text, checked } = todo;
  
  return (
    <TodoItemBox>
      <div className={`content ${checked ? 'checked' : ''}`}>
        <TodoIcon>
          {checked ? 
          <MdCheckCircle onClick={()=>{onCheckToggle(id)}} /> : 
          <MdCheckCircleOutline onClick={()=>{onCheckToggle(id)}} />}
        </TodoIcon>
        <Text className='text' onClick={()=>{
          onChangeSelected(todo)
          onCreateToggle()
          }}>{text}</Text>
        
      </div>
    </TodoItemBox>
  )
}

export default TodoItem;