import React from 'react';
import { render } from '@testing-library/react';
import TodoListForm from './TodoListForm';

describe('<TodoListForm/>', () => {
  it('should render', () => {
    const rendered = render(<TodoListForm />);
    expect(
      rendered.getByPlaceholderText('할 일을 입력하세요')
    ).toBeInTheDocument();
  });
});
