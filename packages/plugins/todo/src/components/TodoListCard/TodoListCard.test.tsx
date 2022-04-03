import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoListCard from './TodoListCard';

describe('<TodoListCard/>', () => {
  const checkedTodo = {
    id: 'a',
    title: 'a',
    checked: true,
  };

  const uncheckedTodo = {
    id: 'b',
    title: 'b',
    checked: false,
  };

  it('should render', () => {
    const rendered = render(<TodoListCard todo={checkedTodo} />);
    expect(rendered.getByText('a')).toBeInTheDocument();
  });

  it('should render delete button', () => {
    const rendered = render(<TodoListCard todo={checkedTodo} />);
    fireEvent(
      rendered.container.querySelector('li'),
      new MouseEvent('click', { bubbles: true, cancelable: true })
    );
    const removeButton = rendered.getByText('삭제하기');
    expect(
      removeButton.classList.contains('todolist__card-removebtn-active')
    ).toBe(true);
  });

  it('should render check icon', () => {
    const rendered = render(<TodoListCard todo={checkedTodo} />);
    const checkbox =
      rendered.container.getElementsByClassName('todolist__checkbox')[0];
    expect(checkbox).toBeTruthy();
    fireEvent(
      checkbox,
      new MouseEvent('click', { bubbles: true, cancelable: true })
    );
    expect(checkbox.classList.contains('todolist__checkbox-checked')).toBe(
      true
    );
  });

  it('should not render check icon', () => {
    const rendered = render(<TodoListCard todo={uncheckedTodo} />);
    const checkbox =
      rendered.container.getElementsByClassName('todolist__checkbox')[0];
    expect(checkbox).toBeTruthy();
    expect(checkbox.classList.contains('todolist__checkbox-checked')).toBe(
      false
    );
  });
});
