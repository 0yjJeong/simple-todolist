import React from 'react';
import { Todo, CheckBox, useTodoList } from '@todolist/plugin-todo';
import { BiTrash } from 'react-icons/bi';
import { useSpring, animated } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import styled, { css } from 'styled-components';

export type Props = {
  todo: Todo;
  draggableMaxX?: number;
};

const SlideToDeleteCard = ({ todo, draggableMaxX = 42 }: Props) => {
  const { removeTodo, toggleTodo } = useTodoList();
  const isDragging = React.useRef(false);
  const dragged = React.useRef(false);

  const onRemoveTodoHandler = React.useCallback(async () => {
    if (removeTodo) {
      await removeTodo(todo.id);
    }
  }, [todo.id, removeTodo]);

  const onToggleTodoHandler = React.useCallback(
    async (event: React.ChangeEvent) => {
      event.stopPropagation();
      if (toggleTodo) {
        if (!isDragging.current) {
          await toggleTodo(todo.id);
        }
      }
    },
    [todo.id, toggleTodo]
  );

  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));

  const bind = useDrag(({ down, direction, movement: [mx] }) => {
    if (!isDragging.current) {
      const trigger = mx < -0.2 || mx > 0.2;
      if (trigger) {
        isDragging.current = true;
      }
    }

    api.start(() => {
      if (direction[0] === -1) {
        if (mx <= -draggableMaxX) {
          if (down) {
            if (!dragged.current) {
              dragged.current = true;
            }
          }
          return { x: -draggableMaxX };
        }
        return { x: down ? mx : 0 };
      } else if (direction[0] === 1) {
        if (dragged.current) {
          if (down) {
            dragged.current = false;
            return { x: 0 };
          }
          return { x: mx };
        }
      }
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
    <li>
      <DeleteCard onClick={onRemoveTodoHandler}>
        <span>
          <BiTrash />
        </span>
      </DeleteCard>
      <animated.div
        {...(bind as any)()}
        style={{
          x,
          y,
          touchAction: 'none',
          height: '50px',
        }}
      >
        <Card checked={todo.checked}>
          <CheckBox onCheck={onToggleTodoHandler} />
          <p>{todo.title}</p>
        </Card>
      </animated.div>
    </li>
  );
};

export default SlideToDeleteCard;

const Card = styled.div<{ checked: boolean }>`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  border: 1px solid #f2f2f2;
  border-radius: 5px;
  background: #ffffff;
  padding-left: 10px;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;

  ${(props) =>
    props.checked &&
    css`
      background: #fcfcfc;
      color: #dbdbdb;
    `}
`;

const DeleteCard = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  gap: 12px;
  background: #ffffff;
  justify-content: end;
  position: absolute;
  top: 0;
  right: 0;

  span {
    background: #ff6047;
    color: #fff;
    height: 100%;
    display: grid;
    place-items: center;
    border-radius: 5px;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 1rem;
    cursor: pointer;
  }
`;
