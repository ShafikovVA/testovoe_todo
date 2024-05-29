import { ReactNode } from 'react';
import './page-container.css';

export interface PageContainerProps {
  children?: ReactNode;
}

export const PageContainer = ({children}: PageContainerProps) => {
  return (
    <div className="page-container">
      {children}
    </div>
  )
}
