import { ShapeSvg } from './icons/shape-svg'
import './task-tracker.css'
import { TrackerColumn } from '@/entities/tracker-column'
import { useTasksColumns, useTasksCulumnsDispatch } from '../model/contexts/TaskColumnContext';

export const TaskTracker = () => {
  const columnList = useTasksColumns();
  const columnListDispatch = useTasksCulumnsDispatch();

  const addNewColumn = () => {
    columnListDispatch && columnListDispatch({
      type: 'added',
    });
  }

  return (
    <div className='task-tracker-container'>
      <div className='actions'>
        <div className='actions-text'><ShapeSvg /> Процессы проекта CRM - система</div>
        <button className='button' onClick={addNewColumn}>ДОБАВИТЬ СТОЛБЕЦ</button>
      </div>
      <div className='columns'>
        {
          columnList?.map((columnListItem)  =>  (
            <TrackerColumn key={columnListItem.id}  {...columnListItem}  />
          ))
        }
      </div>
    </div>
  )
}
