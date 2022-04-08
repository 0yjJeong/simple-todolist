import { render } from '@testing-library/react';
import 'jest-styled-components';
import Underlined from './Underlined';
import { Size } from '../Typography/Typography';

describe('<Underlined/>', () => {
  it('should', () => {
    const rendered = render(<Underlined text='a' size='subTitle' />);
    expect(rendered.container.firstChild).toMatchSnapshot();
    expect(rendered.container.firstChild).toHaveStyleRule('z-index', '-1', {
      modifier: '&:before',
    });
    expect(rendered.container.firstChild).toHaveStyleRule('display', 'block', {
      modifier: '&:before',
    });
    expect(rendered.container.firstChild).toHaveStyleRule('content', "''", {
      modifier: '&:before',
    });
  });
});
