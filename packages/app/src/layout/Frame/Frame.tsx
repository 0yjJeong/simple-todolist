import { FC } from 'react';
import Navbar from '../Navbar/Navbar';

const Frame: FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
};

export default Frame;
