import { FC } from 'react';
import { Helmet } from 'react-helmet';

type HeaderProps = {
  title?: string;
};

const Header: FC<HeaderProps> = ({ title }) => {
  return <Helmet title={title} />;
};

export default Header;
