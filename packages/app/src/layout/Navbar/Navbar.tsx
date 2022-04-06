import { Button } from '@todolist/plugin-ui-core';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavbarBlock = styled.nav`
  display: flex;
  justify-content: flex-end;
  height: 76px;
`;

const Navbar = () => {
  return (
    <NavbarBlock>
      <NavLink to='/login'>
        <Button>로그인</Button>
      </NavLink>
      <NavLink to='/signup'>
        <Button>회원가입</Button>
      </NavLink>
    </NavbarBlock>
  );
};

export default Navbar;
