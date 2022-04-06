import { NavLink } from 'react-router-dom';
import TodoList, { TodoListCard, useTodoList } from '@todolist/plugin-todo';
import Header from '../../layout/Header/Header';
import ShadowBox from '../../components/ShadowBox/ShadowBox';
import Typography, { Size } from '../../components/Typography/Typography';
import TodoWithText from '../../components/TodoWithText/TodoWithText';
import Underlined from '../../components/Underlined/Underlined';
import Section from '../../layout/Section';

const todos = [
  {
    id: 'a',
    title: 'a',
    checked: true,
  },
  {
    id: 'b',
    title: 'b',
    checked: false,
  },
  {
    id: 'c',
    title: 'c',
    checked: false,
  },
  {
    id: 'd',
    title: 'd',
    checked: true,
  },
];

const HomePage = () => {
  const { addTodo, removeTodo, toggleTodo } = useTodoList();
  return (
    <>
      <Header title='HomePage' />
      <Section.Main>
        <Typography text='간단한 투두 리스트' size={Size.TITLE} />
        <Typography
          text='간단하게 당신의 할 일을 정리해보세요'
          size={Size.SUB_TITLE}
        />
        <NavLink to='/signup'>
          <button>시작하기</button>
        </NavLink>
      </Section.Main>
      <Section.Pros>
        <Underlined text='이 투두리스트는...' size={Size.SUB_TITLE} />
        <div>
          <TodoWithText>
            <TodoListCard
              fixed={true}
              todo={{
                id: 'a',
                title: '사용방법이 간단합니까?',
                checked: false,
              }}
            />
            <Typography text='당연하죠!' size={Size.CAPTION} />
          </TodoWithText>
          <TodoWithText>
            <TodoListCard
              fixed={true}
              todo={{ id: 'a', title: '디자인이 깔끔하나요?', checked: false }}
            />
            <Typography text='네!' size={Size.CAPTION} />
          </TodoWithText>
          <TodoWithText>
            <TodoListCard
              fixed={true}
              todo={{ id: 'a', title: '무료인가요?', checked: false }}
            />
            <Typography text='물론입니다!' size={Size.CAPTION} />
          </TodoWithText>
        </div>
      </Section.Pros>
      <Section.Try>
        <Underlined text='테스트 해보세요' size={Size.SUB_TITLE} />
        <ShadowBox>
          <TodoList
            initialTodos={todos}
            onAddTodo={addTodo}
            onRemoveTodo={removeTodo}
            onToggleTodo={toggleTodo}
          />
        </ShadowBox>
      </Section.Try>
    </>
  );
};

export default HomePage;
