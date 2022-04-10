import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoListCheckBox from './CheckBox';
import CheckProvider from './CheckProvider';

const fn = jest.fn();

describe('<CheckBox/>', () => {
  it('should be checked', () => {
    const rendered = render(
      <CheckProvider checked={false}>
        <TodoListCheckBox onCheck={fn} />
      </CheckProvider>
    );
    const checkbox = rendered.container.querySelector('input');
    expect(checkbox).not.toBeChecked();
    fireEvent(checkbox, new MouseEvent('click'));
    expect(checkbox).toBeChecked();
  });
});
