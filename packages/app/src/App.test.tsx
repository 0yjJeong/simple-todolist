import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it("should be rendered as '/'", () => {
    render(<App />);
    screen.getByText('HomePage');
  });

  it("should be rendered as '/login'", () => {
    window.history.pushState({}, '', '/login');
    render(<App />);
    screen.getByText('LoginPage');
  });

  it('should render a todolist', () => {
    window.history.pushState({}, '', '/a');
    render(<App />);
    screen.getByText('a');
    screen.getByText('b');
  });

  it('should land on a not found page', () => {
    window.history.pushState({}, '', '/a/b');
    render(<App />);
    screen.getByText(/Not found/i);
  });
});
