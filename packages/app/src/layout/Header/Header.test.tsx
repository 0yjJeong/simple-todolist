import React from 'react';
import { render, waitFor } from '@testing-library/react';
import Header from './Header';

describe('<Header/>', () => {
  it('should render with title', async () => {
    render(<Header title='a' />);
    await waitFor(() => {
      expect(document.title).toEqual('a');
    });
  });
});
