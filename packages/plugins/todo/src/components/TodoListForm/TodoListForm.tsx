import React, { FC } from 'react';
import { v4 } from 'uuid';
import { Todo } from '../../types';

type TodoListFormProps = {
  onAddTodo?: (todo: Todo) => void | Promise<void>;
};

const TodoListForm: FC<TodoListFormProps> = ({ onAddTodo }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onAddTodoHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (onAddTodo) {
      if (inputRef.current) {
        onAddTodo({
          id: v4(),
          title: inputRef.current.value,
          checked: false,
        });
        inputRef.current.value = '';
      }
    }
  };

  return (
    <form className='todolist__form' onSubmit={onAddTodoHandler}>
      <input placeholder='할 일을 입력하세요' ref={inputRef} />
      <button type='submit'>추가</button>
    </form>
  );
};

export default TodoListForm;
