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
        <button>로그인</button>
      </NavLink>
      <NavLink to='/signup'>
        <button>회원가입</button>
      </NavLink>
    </NavbarBlock>
  );
};

export default Navbar;
