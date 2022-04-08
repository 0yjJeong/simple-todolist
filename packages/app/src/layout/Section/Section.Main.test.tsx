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
    expect(rendered.container.firstChild).toHaveStyleRule(
      'display',
      'inline-block',
      {
        modifier: 'a',
      }
    );
    expect(rendered.container.firstChild).toHaveStyleRule(
      'margin-bottom',
      '10px',
      {
        modifier: '.typo-title',
      }
    );
    expect(rendered.container.firstChild).toHaveStyleRule('color', '#787878', {
      modifier: '.typo-subTitle',
    });
  });
});
