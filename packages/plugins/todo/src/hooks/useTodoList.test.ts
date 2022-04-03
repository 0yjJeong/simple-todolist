import { renderHook, act } from '@testing-library/react-hooks';
import useTodoList from './useTodoList';

describe('useTodoList', () => {
  it('should add todo', () => {
    const todo = {
      id: 'a',
      title: 'a',
      checked: true,
    };
    const { result } = renderHook(() => useTodoList());
    act(() => {
      result.current.addTodo(todo);
    });
    expect(result.current.getTodos()).toEqual([todo]);
  });

  it("should remove todo with id 'a'", () => {
    const todos = [
      {
        id: 'a',
        title: 'a',
        checked: true,
      },
    ];
    const { result } = renderHook(() => useTodoList());
    act(() => {
      result.current.setTodos(todos);
    });
    expect(result.current.getTodos()).toEqual(todos);
    act(() => {
      result.current.removeTodo('a');
    });
    expect(result.current.getTodos()).toEqual([]);
  });

  it('should toggle the checkbox', () => {
    const todos = [
      {
        id: 'a',
        title: 'a',
        checked: true,
      },
    ];
    const { result } = renderHook(() => useTodoList());
    act(() => {
      result.current.setTodos(todos);
    });
    expect(result.current.getTodos()).toEqual(todos);
    act(() => {
      result.current.toggleTodo('a');
    });
    expect(result.current.getTodos()).toEqual([
      {
        id: 'a',
        title: 'a',
        checked: false,
      },
    ]);
  });
});
