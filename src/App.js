import './App.css';
import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import { MdAddCircle } from 'react-icons/md'

import Template from './components/Template';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';

const GlobalStyle = createGlobalStyle`
  // 글로벌 스타일 컴포넌트
  body {
    // 전체 배경
    background: #f2f4f6;
  }
  .createButton {
    // 더하기버튼
    margin-top: 20px;
    font-size: 4rem;
    color: #e5e8eb;
    cursor: pointer;
    :hover {
      color: #d1d6db;
    }
  }
`;

let nextId = 2;
const dummyData = [
  {id: 1, text: "할일을 추가해 보세요!", checked: true},
]

function App() {
  
  const [todos, setTodos] = useState(dummyData); // 전체 리스트 상태 변경하기
  const [createToggle, setCreateToggle] = useState(false); // 새 할일 입력하는 모달
  const [selected, setSelected] = useState(null); // 수정하기

  const onCreateToggle = () => {
    // 이전 값의 boolean 값을 반대로 바꿔주는 함수, 팝업창을 띄워줍니다
    if (selected) {
      setSelected(null);
    }
    setCreateToggle(prev => !prev)
  }
  const onCreateTodo = (text) => {
    // 인풋창에 작성한 내용을 리스트에 넣어주는 함수
    if (text === "") {
      return alert('할일을 입력해 주세요')
    } else {
      const todo = {
        id: nextId,
        text,
        checked: false,
      } 
      setTodos(todos => todos.concat(todo));
      nextId++;
    }
  };
  const onCheckToggle = (id) => {
    // 체크박스를 클릭해 완료한 항목 여부를 바꿔줍니다.
    setTodos(todos => todos.map(todo => (todo.id === id ? {...todo, checked: !todo.checked} : todo)))
  }
  const onChangeSelected = (todo) => {
    // 수정한 내용 다시 입력하는 함수
    setSelected(todo)
  }
  const onRemove = (id) => {
    // 할 일 목록을 삭제하는 함수
    onCreateToggle();
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }
  const onUpdate = (id, text) => {
    // 수정한 내용 반영하는 함수
    onCreateToggle();
    setTodos(todos => todos.map(todo => (todo.id === id ? {...todo, text} : todo)))
  }

  return (
    <>
    <GlobalStyle />
      <Template>
        <TodoHead todos={todos} />
        <TodoList 
          todos={todos}
          onCheckToggle={onCheckToggle}
          onCreateToggle={onCreateToggle} 
          onChangeSelected={onChangeSelected} 
        />
        <MdAddCircle className='createButton' onClick={onCreateToggle} />
        {createToggle && 
          <TodoCreate
            onCreateToggle={onCreateToggle}
            onCreateTodo={onCreateTodo} 
            selected={selected} 
            onRemove={onRemove} 
            onUpdate={onUpdate} />}
      </Template>
    </>
  );
}

export default App;
