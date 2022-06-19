import { render } from '@testing-library/react';
import 'jest-styled-components';
import TodoListContainer from './TodoList';

describe('<ShadowBox/>', () => {
  it('works', () => {
    const rendered = render(<TodoListContainer />);
    expect(rendered.container.firstChild).toMatchSnapshot();
    expect(rendered.getByPlaceholderText('할 일을 입력하세요')).toBeDefined();
  });
});
