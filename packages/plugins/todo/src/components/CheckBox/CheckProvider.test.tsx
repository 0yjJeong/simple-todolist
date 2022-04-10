import React from 'react';
import { render } from '@testing-library/react';
import CheckProvider, { useCheck } from './CheckProvider';

describe('CheckProvider', () => {
  const Consumer = () => {
    const checked = useCheck();
    return <p>{checked ? 'checked' : 'unchecked'}</p>;
  };

  it('should provide checkProvider', () => {
    const rendered = render(
      <CheckProvider checked={true}>
        <Consumer />
      </CheckProvider>
    );
    rendered.getByText('checked');
  });

  it('should error if no provider is available', () => {
    try {
      expect(() => render(<Consumer />));
    } catch (error) {
      expect(error).toMatch(/^No CheckProvider is available in react context/);
    }
  });
});
