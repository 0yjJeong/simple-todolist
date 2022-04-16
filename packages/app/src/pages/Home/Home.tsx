import { NavLink } from 'react-router-dom';
import TodoList, { TodoListForm, useTodoList } from '@todolist/plugin-todo';
import { Button } from '@todolist/plugin-ui-core';
import Header from '../../layout/Header/Header';
import ShadowBox from '../../components/ShadowBox/ShadowBox';
import Typography from '../../components/Typography/Typography';
import Underlined from '../../components/Underlined/Underlined';
import Section from '../../layout/Section';
import { CustomCardA, CustomCardB, CustomCardC } from '../../cards/CustomCard';
import SlideToDeleteCard from '../../cards/SlideToDeleteCard';

const todoA = {
  id: 'a',
  title: '간단한 사용방법',
  checked: false,
};

const todoB = {
  id: 'b',
  title: '깔끔한 디자인',
  checked: false,
};

const todoC = {
  id: 'c',
  title: '다양한 스타일',
  checked: false,
};

const todos = [
  {
    id: 'a',
    title: '강아지 산책시키기',
    checked: true,
  },
  {
    id: 'b',
    title: '빨래하기',
    checked: false,
  },
  {
    id: 'c',
    title: '숙제하기',
    checked: false,
  },
  {
    id: 'd',
    title: '세탁물 맡기기',
    checked: true,
  },
];

const HomePage = () => {
  const { addTodo } = useTodoList();
  return (
    <>
      <Header title='HomePage' />
      <Section.Main>
        <Typography text='간단한 투두 리스트' size='title' />
        <Typography
          text='간단하게 당신의 할 일을 정리해보세요 (＾▽＾)'
          size='subTitle'
        />
        <NavLink to='/signup'>
          <Button
            size='large'
            variant='contained'
            palette={{
              color: '#ffffff',
              light: '#2ac955',
              darker: '#0abf3a',
            }}
          >
            시작하기
          </Button>
        </NavLink>
      </Section.Main>
      <Section.Cards>
        <Underlined text='간단한 투두리스트는...' size='subTitle' />
        <div className='cards'>
          <CustomCardA todo={todoA} />
          <CustomCardB todo={todoB} />
          <CustomCardC todo={todoC} />
        </div>
      </Section.Cards>
      <Section.Try>
        <Underlined text='테스트 해보세요' size='subTitle' />
        <ShadowBox>
          <TodoListForm onAddTodo={addTodo} />
          <TodoList initialTodos={todos} CardComponent={SlideToDeleteCard} />
        </ShadowBox>
      </Section.Try>
    </>
  );
};

export default HomePage;
