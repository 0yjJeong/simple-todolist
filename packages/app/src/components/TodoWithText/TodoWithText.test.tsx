import { render } from '@testing-library/react';
import 'jest-styled-components';
import TodoWithText from './TodoWithText';

describe('<ShadowBox/>', () => {
  it('works', () => {
    const rendered = render(<TodoWithText />);
    expect(rendered.container.firstChild).toMatchSnapshot();
    expect(rendered.container.firstChild).toHaveStyleRule('display', 'flex');
    expect(rendered.container.firstChild).toHaveStyleRule(
      'align-items',
      'center'
    );
  });
});
