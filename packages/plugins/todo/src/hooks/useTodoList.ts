import React from 'react';
import { useAtom } from 'jotai';
import { TodoListInstance, Instance, Todo } from '../types';
import { todosAtom } from '../atom/todosAtom';

export default function useTodoList(): TodoListInstance {
  const [todos, _setTodos] = useAtom(todosAtom);

  const getTodos = React.useCallback<Instance.GetTodos>(() => {
    return todos;
  }, [todos]);

  const setTodos = React.useCallback<Instance.SetTodos>((todos: Todo[]) => {
    _setTodos(todos);
    return;
  }, []);

  const addTodo = React.useCallback<Instance.AddTodo>(
    (todo: Todo) => {
      return setTodos([todo, ...todos]);
    },
    [todos]
  );

  const removeTodo = React.useCallback<Instance.RemoveTodo>(
    (id: string) => {
      return setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  const toggleTodo = React.useCallback<Instance.ToggleTodo>(
    (id: string) => {
      return setTodos(
        todos.map((todo) =>
          todo.id !== id
            ? todo
            : {
                ...todo,
                checked: !todo.checked,
              }
        )
      );
    },
    [todos]
  );

  return {
    getTodos,
    setTodos,
    addTodo,
    removeTodo,
    toggleTodo,
  };
}
