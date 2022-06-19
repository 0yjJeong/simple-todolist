import React from 'react';
import TodoList, { TodoListForm, useTodoList } from '@todolist/plugin-todo';
import ShadowBox from '../ShadowBox/ShadowBox';
import SlideToDeleteCard from '../../cards/SlideToDeleteCard';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 1rem;
  padding-right: 1rem;
  background-image: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);
`;

const TodoListContainer = () => {
  const { addTodo } = useTodoList();
  return (
    <Wrapper>
      <ShadowBox>
        <TodoListForm onAddTodo={addTodo} />
        <TodoList initialTodos={[]} CardComponent={SlideToDeleteCard} />
      </ShadowBox>
    </Wrapper>
  );
};

export default TodoListContainer;
