import React from 'react';
import { render } from '@testing-library/react';
import TodoListCardCheckButton from './TodoListCardCheckButton';

describe('<TodoListCardCheckButton/>', () => {
  it('should render check icon', () => {
    const rendered = render(<TodoListCardCheckButton checked={true} />);
    expect(rendered.container.querySelector('svg')).toBeInTheDocument();
  });

  it('should not render check icon', () => {
    const rendered = render(<TodoListCardCheckButton checked={false} />);
    expect(rendered.container.querySelector('svg')).toBeNull();
  });
});
