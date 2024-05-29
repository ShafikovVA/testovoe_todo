import { BinSvg } from '@/features/task-tracker/ui/icons/bin-svg';
import { PencilSvg } from '@/features/task-tracker/ui/icons/pencil-svg';
import { PlusButton } from '@/shared/plus-button/ui/plus-button';
import { ReactNode } from 'react';
import './tracker-column.css';

export interface TrackerColumnProps{
  title?: string;
  icon?: ReactNode;
  children?: ReactNode[];

}

export const TrackerColumn = (props: TrackerColumnProps) => {
  const {title, icon, children} = props;
  return (
    <div className='column'>
    <div className='column-header'>
      <div className='left-block'>
        {icon}
        <span className='text'>{title}</span>
      </div>
      <div className='right-block'>
        <PencilSvg />
        <BinSvg />
      </div>
    </div>
    <div className='task-list'>
      {children}
      <PlusButton />
    </div>
  </div>
  );
}
