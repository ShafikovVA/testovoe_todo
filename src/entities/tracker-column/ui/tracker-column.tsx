import { useDroppable } from '@dnd-kit/core';
import { BinSvg } from '@/features/task-tracker/ui/icons/bin-svg';
import { PencilSvg } from '@/features/task-tracker/ui/icons/pencil-svg';
import { PlusButton } from '@/shared/plus-button/ui/plus-button';
import { ReactNode } from 'react';
import './tracker-column.css';
import { useTasksCulumnsDispatch } from '@/features/task-tracker/model/contexts/TaskColumnContext';
import { Task, TaskProps } from '@/entities/task';

export interface TrackerColumnProps{
  id: number;
  title?: string;
  icon?: ReactNode;
  tasks?: TaskProps[];

}

export const TrackerColumn = (props: TrackerColumnProps) => {
  const {id, title, icon, tasks} = props;
  const {isOver, setNodeRef} = useDroppable({
    id,
  });
  const columnDispatch = useTasksCulumnsDispatch();

  const deleteColumn = () => {
    columnDispatch && columnDispatch({
      id: id, type: 'deleted'
    });
  }
  console.log(tasks);
  return (
    <div ref={setNodeRef} className={`column ${isOver ? 'over' : ''}`}>
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
      {
        tasks && tasks.map((task)  =>  <Task key={task.id} {...task} />)
      }
      <PlusButton />
    </div>
  </div>
  );
}
