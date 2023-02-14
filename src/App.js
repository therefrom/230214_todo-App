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
  color: #1E1E1E;
  body {
    // 전체 배경
    background: #dce7d9;
  }
  .createButton {
    // 더하기버튼
    margin-top: 20px;
    font-size: 4rem;
    cursor: pointer;
    :hover {
      color: gold;
    }
  }
`;

function App() {
  const [createToggle, setCreateToggle] = useState(false);
  const [todos, setTodos] = useState([
    {id: 1, text: "할일 1", checked: true},
    {id: 2, text: "할일 2", checked: false},
    {id: 3, text: "할일 3", checked: false},
    {id: 4, text: "할일 4", checked: true},
    {id: 5, text: "할일 5", checked: false},
  ]);
  const onCreateToggle = () => {
    // 이전 값의 boolean 값을 반대로 바꿔주는 함수
    setCreateToggle(prev => !prev)
  }
  return (
    <>
    <GlobalStyle />
      <Template>
        <TodoHead todos={todos} />
        <TodoList todos={todos} />
        
        <MdAddCircle className='createButton' onClick={onCreateToggle}/>
      </Template>
    </>
  );
}

export default App;
