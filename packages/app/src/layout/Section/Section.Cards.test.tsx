import { render } from '@testing-library/react';
import 'jest-styled-components';
import Section from './Section.Cards';

describe('<Section.Cards/>', () => {
  it('should works', () => {
    const rendered = render(<Section />);
    expect(rendered.container.firstChild).toMatchSnapshot();
    expect(rendered.container.firstChild).toHaveStyleRule(
      'text-align',
      'center'
    );
    expect(rendered.container.firstChild).toHaveStyleRule(
      'margin-bottom',
      '10px',
      { modifier: '.cards > *' }
    );
  });
});
