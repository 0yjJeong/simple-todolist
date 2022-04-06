import { render } from '@testing-library/react';
import 'jest-styled-components';
import ShadowBox from './ShadowBox';
import shadow from '../../styles/shadow';

describe('<ShadowBox/>', () => {
  it('works', () => {
    const rendered = render(<ShadowBox />);
    expect(rendered.container.firstChild).toMatchSnapshot();
    expect(rendered.container.firstChild).toHaveStyleRule(
      'box-shadow',
      shadow.shadow0
    );
  });
});
