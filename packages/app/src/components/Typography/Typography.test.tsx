import { render } from '@testing-library/react';
import 'jest-styled-components';
import Typography, { Size, typoStyles } from './Typography';

describe('<Typography/>', () => {
  it('should render title typo', () => {
    const styles = typoStyles[Size.TITLE];
    const rendered = render(<Typography text='a' size={Size.TITLE} />);
    expect(rendered.container.firstChild).toMatchSnapshot();
    expect(rendered.container.firstChild).toHaveStyleRule(
      'font-size',
      `${styles['@size']}px`
    );
    expect(rendered.container.firstChild).toHaveStyleRule(
      'font-weight',
      styles['@weight']
    );
  });

  it('should render sub-title typo', () => {
    const styles = typoStyles[Size.SUB_TITLE];
    const rendered = render(<Typography text='a' size={Size.SUB_TITLE} />);
    expect(rendered.container.firstChild).toMatchSnapshot();
    expect(rendered.container.firstChild).toHaveStyleRule(
      'font-size',
      `${styles['@size']}px`
    );
    expect(rendered.container.firstChild).toHaveStyleRule(
      'font-weight',
      styles['@weight']
    );
  });

  it('should render caption typo', () => {
    const styles = typoStyles[Size.CAPTION];
    const rendered = render(<Typography text='a' size={Size.CAPTION} />);
    expect(rendered.container.firstChild).toMatchSnapshot();
    expect(rendered.container.firstChild).toHaveStyleRule(
      'font-size',
      `${styles['@size']}px`
    );
    expect(rendered.container.firstChild).toHaveStyleRule(
      'font-weight',
      styles['@weight']
    );
  });
});
