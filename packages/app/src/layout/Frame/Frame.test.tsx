import React from 'react';
import { render, screen } from '@testing-library/react';
import Frame from './Frame';
import { BrowserRouter } from 'react-router-dom';

describe('<Frame/>', () => {
  it('should render', () => {
    render(
      <BrowserRouter>
        <Frame>
          <>children</>
        </Frame>
      </BrowserRouter>
    );
    expect(screen.getByText('children'));
  });
});
