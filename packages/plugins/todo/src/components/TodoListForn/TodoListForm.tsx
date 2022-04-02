import React, { FC } from 'react';

const TodoListForm: FC = () => {
  const onSubmitHandler = () => {};
  return (
    <form className='todolist__form' onSubmit={onSubmitHandler}>
      <input placeholder='할 일을 입력하세요' />
      <button type='submit'>추가</button>
    </form>
  );
};

export default TodoListForm;
