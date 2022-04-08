import React from 'react';
import { ButtonBaseType } from '../ButtonBase/types';

type OverrideProps<P, C = HTMLButtonElement> = P & React.HTMLAttributes<C>;

export type ButtonType = OverrideProps<
  Omit<ButtonBaseType, 'palette'> & { palette?: ButtonBaseType['palette'] }
>;
