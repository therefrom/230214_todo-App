// TodoList는 TodoItem을 모아 보여줍니다

import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBox = styled.div`
  flex: 1;
  overflow-y: auto;
`

function TodoList( {todos} ) {
  return (
    <TodoListBox>
      {todos.map(todo => (
      <TodoItem key={todo.id} todo={todo} />
      ))}
    </TodoListBox>
  )
}

export default TodoList;