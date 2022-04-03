import { renderHook, act } from '@testing-library/react-hooks';
import { useAtom } from 'jotai';
import { todosAtom } from './todosAtom';

describe('todosAtom', () => {
  it('should return empty array', () => {
    const { result } = renderHook(() => useAtom(todosAtom));
    expect(result.current[0]).toEqual([]);
  });

  it('should fill the array', () => {
    const { result } = renderHook(() => useAtom(todosAtom));
    expect(result.current[0]).toEqual([]);

    const todos = [
      { id: 'a', title: 'a', checked: false },
      { id: 'b', title: 'b', checked: true },
    ];
    act(() => {
      result.current[1](todos);
    });
    expect(result.current[0]).toBe(todos);
  });
});
