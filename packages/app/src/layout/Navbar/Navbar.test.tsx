import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Navbar from './Navbar';

describe('<Navbar/>', () => {
  it('should ', () => {
    const rendered = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const anchors = rendered.container.querySelectorAll('a');
    expect(anchors).toHaveLength(2);
    expect(rendered.getByText('로그인'));
    expect(rendered.getByText('회원가입'));
    expect(anchors[0].href).toBe('http://localhost/login');
    expect(anchors[1].href).toBe('http://localhost/signup');
  });
});
