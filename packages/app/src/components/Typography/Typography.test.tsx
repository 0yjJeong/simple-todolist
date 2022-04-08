import { render } from '@testing-library/react';
import 'jest-styled-components';
import Typography, { Size, typoStyles } from './Typography';

describe('<Typography/>', () => {
  it('should render title typo', () => {
    const styles = typoStyles.title;
    const rendered = render(<Typography text='a' size='title' />);
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
    const styles = typoStyles.subTitle;
    const rendered = render(<Typography text='a' size='subTitle' />);
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
    const styles = typoStyles.caption;
    const rendered = render(<Typography text='a' size='caption' />);
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
