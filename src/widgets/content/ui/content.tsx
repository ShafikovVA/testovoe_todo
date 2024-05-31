import { ReactNode } from 'react';
import './content.css'

export interface ContentProps {
  children?: ReactNode;
}

export const Content = ({children}: ContentProps) => {
  return (
    <main className="content">
      {children}
    </main>
  )
}
