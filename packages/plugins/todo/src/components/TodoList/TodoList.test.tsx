import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoList from './TodoList';

const todos = [
  { id: 'a', title: 'a', checked: true },
  { id: 'b', title: 'b', checked: false },
];

describe('<TodoList/>', () => {
  it('should render', () => {
    render(<TodoList todos={todos} />);
    expect(screen.getByText('a')).toBeInTheDocument();
    expect(screen.getByText('b')).toBeInTheDocument();
  });
});
