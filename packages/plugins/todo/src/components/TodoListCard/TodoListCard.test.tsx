import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoListCard from './TodoListCard';

describe('<TodoListCard/>', () => {
  const todo = {
    id: 'a',
    title: 'a',
    checked: false,
  };

  it('should render', () => {
    const rendered = render(<TodoListCard todo={todo} />);
    expect(rendered.getByText('a')).toBeInTheDocument();
  });

  it('should render delete button', () => {
    const rendered = render(<TodoListCard todo={todo} />);
    fireEvent(
      rendered.container.querySelector('li'),
      new MouseEvent('click', { bubbles: true, cancelable: true })
    );
    const removeButton = rendered.getByText('삭제하기');
    expect(
      removeButton.classList.contains('todolist__card-removebtn-active')
    ).toBe(true);
  });
});
