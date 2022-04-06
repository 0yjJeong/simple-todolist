import { render } from '@testing-library/react';
import 'jest-styled-components';
import Section from './Section.Main';

describe('<Section.Main/>', () => {
  it('should works', () => {
    const rendered = render(<Section />);
    expect(rendered.container.firstChild).toMatchSnapshot();
    expect(rendered.container.firstChild).toHaveStyleRule(
      'text-align',
      'center'
    );
  });
});
