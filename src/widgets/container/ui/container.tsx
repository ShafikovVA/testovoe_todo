import { ReactNode } from 'react';
import './container.css';

export interface PageContainerProps {
  children?: ReactNode;
}

export const Container = ({children}: PageContainerProps) => {
  return (
    <div className="container">
      {children}
    </div>
  )
}
