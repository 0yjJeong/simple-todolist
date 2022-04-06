import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

describe('<Button/>', () => {
  it('should render child', () => {
    const rendered = render(<Button>a</Button>);
    expect(rendered.getByText('a')).toBeInTheDocument();
  });
});
