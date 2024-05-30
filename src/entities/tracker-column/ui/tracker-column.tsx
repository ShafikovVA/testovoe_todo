import { BinSvg } from '@/features/task-tracker/ui/icons/bin-svg';
import { PencilSvg } from '@/features/task-tracker/ui/icons/pencil-svg';
import { PlusButton } from '@/shared/plus-button/ui/plus-button';
import { ReactNode } from 'react';
import './tracker-column.css';
import { useTasksCulumnsDispatch } from '@/features/task-tracker/model/contexts/TaskColumnContext';

export interface TrackerColumnProps{
  id: number;
  title?: string;
  icon?: ReactNode;
  children?: ReactNode[];

}

export const TrackerColumn = (props: TrackerColumnProps) => {
  const {id, title, icon, children} = props;

  const columnDispatch = useTasksCulumnsDispatch();

  const deleteColumn = () => {
    columnDispatch && columnDispatch({
      id: id, type: 'deleted'
    });
  }

  return (
    <div className='column'>
    <div className='column-header'>
      <div className='left-block'>
        {icon}
        <span className='text'>{title}</span>
      </div>
      <div className='right-block'>
        <button className='button'><PencilSvg /></button>
        <button className='button' onClick={deleteColumn}><BinSvg /></button>
      </div>
    </div>
    <div className='task-list'>
      {children}
      <PlusButton />
    </div>
  </div>
  );
}
