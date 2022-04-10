import React, { FC } from 'react';

const Context = React.createContext<boolean | undefined>(undefined);

type Props = {
  checked: boolean;
};

const CheckProvider: FC<Props> = ({ checked, children }) => {
  return <Context.Provider value={checked}>{children}</Context.Provider>;
};

export const useCheck = () => {
  const checked = React.useContext(Context);
  if (checked === undefined) {
    throw new Error('No CheckProvider is available in react context');
  }
  return checked;
};

export default CheckProvider;
