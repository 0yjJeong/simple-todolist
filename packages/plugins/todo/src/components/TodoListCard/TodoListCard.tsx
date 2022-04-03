import React, { FC, useState } from 'react';
import classNames from 'classnames';
import { MdRemove } from 'react-icons/md';
import { BsCheck } from 'react-icons/bs';
import { Todo } from '../../types';

type TodoListCardProps = {
  todo: Todo;
  onRemoveTodo?: (todoId: string) => void | Promise<void>;
  onToggleTodo?: (todoId: string) => void | Promise<void>;
};

const TodoListCard: FC<TodoListCardProps> = ({
  todo,
  onRemoveTodo,
  onToggleTodo,
}) => {
  const [clicked, setClicked] = useState(false);

  const cardClass = classNames('todolist__card', {
    'todolist__card-checked': todo.checked,
  });

  const cardRemoveBtnClass = classNames('todolist__card-removebtn', {
    'todolist__card-removebtn-active': clicked,
  });

  const checkboxClass = classNames('todolist__checkbox', {
    'todolist__checkbox-checked': todo.checked,
  });

  const onRemoveTodoHandler = React.useCallback(async () => {
    if (onRemoveTodo) {
      await onRemoveTodo(todo.id);
    }
  }, [todo.id, onRemoveTodo]);

  const onToggleTodoHandler = React.useCallback(
    async (event: React.MouseEvent) => {
      event.stopPropagation();
      if (onToggleTodo) {
        await onToggleTodo(todo.id);
      }
    },
    [todo.id, onToggleTodo]
  );

  return (
    <li className={cardClass} onClick={() => setClicked(!clicked)}>
      <button className={checkboxClass} onClick={onToggleTodoHandler}>
        {todo.checked && <BsCheck />}
      </button>
      <p className='todolist__card-title'>{todo.title}</p>
      <button className={cardRemoveBtnClass} onClick={onRemoveTodoHandler}>
        <MdRemove /> 삭제하기
      </button>
    </li>
  );
};

export default TodoListCard;
