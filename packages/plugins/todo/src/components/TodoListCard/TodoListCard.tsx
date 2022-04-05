import React, { FC } from 'react';
import classNames from 'classnames';
import { BsCheck } from 'react-icons/bs';
import { HiX } from 'react-icons/hi';
import { useSpring, animated } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import { Todo } from '../../types';

type TodoListCardProps = {
  todo: Todo;
  onRemoveTodo?: (todoId: string) => void | Promise<void>;
  onToggleTodo?: (todoId: string) => void | Promise<void>;
};

const DELETE_BUTTON_SIZE = 60;

const TodoListCard: FC<TodoListCardProps> = ({
  todo,
  onRemoveTodo,
  onToggleTodo,
}) => {
  const isDragging = React.useRef<boolean>(false);

  const variation = React.useRef<number>(0);

  const cardClass = classNames('todolist__card-inner', {
    'todolist__card-checked': todo.checked,
  });

  const checkboxClass = classNames('todolist__card-checkbox', {
    'todolist__card-checkbox-checked': todo.checked,
  });

  const onRemoveTodoHandler = React.useCallback(async () => {
    if (onRemoveTodo) {
      await onRemoveTodo(todo.id);
    }
  }, [todo.id, onRemoveTodo]);

  const onToggleTodoHandler = React.useCallback(
    async (event: React.MouseEvent<EventTarget, MouseEvent>) => {
      event.stopPropagation();
      if (onToggleTodo) {
        if (!isDragging.current) {
          await onToggleTodo(todo.id);
        }
      }
    },
    [todo.id, onToggleTodo]
  );

  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));

  const bind = useDrag(({ down, direction, movement: [mx] }) => {
    const trigger = mx < -0.2 || mx > 0.2;
    if (trigger) {
      if (!isDragging.current) {
        isDragging.current = true;
      }
    }

    const dir = direction[0] === -1 ? 'left' : 'right';

    api.start(() => {
      if (dir === 'left') {
        if (mx <= -DELETE_BUTTON_SIZE) {
          variation.current = -DELETE_BUTTON_SIZE;
          return { x: variation.current };
        }
      } else {
        if (!down) {
          variation.current = 0;
        }
        return { x: 0 };
      }

      return { x: down ? mx : 0 };
    });

    if (!down) {
      if (isDragging.current) {
        setTimeout(() => {
          isDragging.current = false;
        }, 0);
      }
    }
  });

  return (
    <li className='todolist__card'>
      <div
        className='todolist__card-inner todolist__card-remove'
        onClick={onRemoveTodoHandler}
      >
        <span
          style={{ paddingRight: `${DELETE_BUTTON_SIZE / 2 - 16 / 2 - 10}px` }}
        >
          <HiX />
          삭제
        </span>
      </div>
      <animated.div
        {...(bind as any)()}
        style={{
          x,
          y,
          touchAction: 'none',
          height: '100%',
        }}
      >
        <div className={cardClass} onClick={onToggleTodoHandler}>
          <button className={checkboxClass}>
            {todo.checked && <BsCheck />}
          </button>
          <p className='todolist__card-title'>{todo.title}</p>
        </div>
      </animated.div>
    </li>
  );
};

export default TodoListCard;
