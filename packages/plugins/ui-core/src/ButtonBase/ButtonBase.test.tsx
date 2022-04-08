import { render } from '@testing-library/react';
import React from 'react';
import ButtonBase from './ButtonBase';
import 'jest-styled-components';

const palette = { color: '#ffffff', light: '#2ac955', darker: '#0abf3a' };

describe('<ButtonBase/>', () => {
  it('should render a text button', () => {
    const rendered = render(
      <ButtonBase variant='text' size='small' palette={palette} />
    );
    expect(rendered.container.firstChild).toMatchSnapshot();
    expect(rendered.container.firstChild).toHaveStyleRule(
      'color',
      palette.color
    );
    expect(rendered.container.firstChild).not.toHaveStyleRule(
      'background',
      palette.light
    );
    expect(rendered.container.firstChild).toHaveStyleRule(
      'background',
      palette.darker,
      {
        modifier: '&:hover',
      }
    );
  });

  it('should render an contained button', () => {
    const rendered = render(
      <ButtonBase variant='contained' size='small' palette={palette} />
    );
    expect(rendered.container.firstChild).toMatchSnapshot();
    expect(rendered.container.firstChild).toHaveStyleRule(
      'color',
      palette.color
    );
    expect(rendered.container.firstChild).toHaveStyleRule(
      'background',
      palette.light
    );
    expect(rendered.container.firstChild).toHaveStyleRule(
      'background',
      palette.darker,
      {
        modifier: '&:hover',
      }
    );
  });

  it('should render an outlined button', () => {
    const rendered = render(
      <ButtonBase variant='outlined' size='small' palette={palette} />
    );
    expect(rendered.container.firstChild).toMatchSnapshot();
    expect(rendered.container.firstChild).toHaveStyleRule(
      'color',
      palette.color
    );
    expect(rendered.container.firstChild).toHaveStyleRule(
      'border',
      `1px solid ${palette.light}`
    );
    expect(rendered.container.firstChild).toHaveStyleRule(
      'background',
      palette.darker,
      {
        modifier: '&:hover',
      }
    );
  });
});
