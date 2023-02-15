// TodoList는 TodoItem을 모아 보여줍니다
import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBox = styled.div`
  flex: 1;
  overflow-y: auto;
`

function TodoList({ todos, onCheckToggle, onCreateToggle, onChangeSelected }) {
  return (
    <TodoListBox>
      {todos.map(todo => (
      <TodoItem 
        key={todo.id}
        todo={todo}
        onCheckToggle={onCheckToggle}
        onCreateToggle={onCreateToggle} 
        onChangeSelected={onChangeSelected} 
        />
      ))}
    </TodoListBox>
  )
}

export default TodoList;