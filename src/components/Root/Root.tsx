import { Fragment, type ReactNode } from 'react';
import 'modern-normalize/modern-normalize.css';

type Props = {
  children: ReactNode;
};

export const Root = ({ children }: Props) => {
  return (
    <Fragment>
      {children}
    </Fragment>
  );
};