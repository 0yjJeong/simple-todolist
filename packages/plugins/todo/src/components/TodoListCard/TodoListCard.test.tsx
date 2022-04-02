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
});
