import { Button } from '@todolist/plugin-ui-core';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import media from '../../styles/media';

const NavbarBlock = styled.nav`
  display: flex;
  justify-content: flex-end;
  height: 76px;
  align-items: center;
  gap: 10px;
  padding-left: 0.6rem;
  padding-right: 0.6rem;

  ${media.laptop} {
    max-width: 1600px;
    margin: auto;
  }
`;

const Navbar = () => {
  return (
    <NavbarBlock>
      <NavLink to='/login'>
        <Button
          variant='outlined'
          palette={{
            color: '#0abf3a',
            light: '#2ac955',
            darker: '#f0fff6',
          }}
        >
          로그인
        </Button>
      </NavLink>
      <NavLink to='/signup'>
        <Button
          variant='contained'
          palette={{
            color: '#ffffff',
            light: '#2ac955',
            darker: '#0abf3a',
          }}
        >
          회원가입
        </Button>
      </NavLink>
    </NavbarBlock>
  );
};

export default Navbar;
