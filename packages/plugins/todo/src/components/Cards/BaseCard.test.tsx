import React from 'react';
import { render } from '@testing-library/react';
import TodoListCard from './BaseCard';

describe('<TodoListCard/>', () => {
  it('should render', () => {
    const rendered = render(<TodoListCard>a</TodoListCard>);
    expect(rendered.getByText('a')).toBeInTheDocument();
  });
});
