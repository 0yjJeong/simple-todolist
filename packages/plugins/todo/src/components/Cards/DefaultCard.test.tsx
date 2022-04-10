import React from 'react';
import { render } from '@testing-library/react';
import DefaultCard from './DefaultCard';
import CheckProvider from '../CheckBox/CheckProvider';

const fn = jest.fn();

describe('<TodoListCard/>', () => {
  it('should render', () => {
    const rendered = render(
      <CheckProvider checked={false}>
        <DefaultCard
          todo={{
            id: 'a',
            title: 'a',
            checked: false,
          }}
          onCheck={fn}
        >
          a
        </DefaultCard>
      </CheckProvider>
    );
    const checkbox = rendered.container.querySelector('input');
    expect(checkbox).toBeDefined();
    expect(rendered.getByText('a')).toBeInTheDocument();
  });
});
