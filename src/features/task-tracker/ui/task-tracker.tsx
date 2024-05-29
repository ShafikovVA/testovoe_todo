import { useState } from 'react';
import { ShapeSvg } from './icons/shape-svg'
import './task-tracker.css'
import { TrackerColumn, TrackerColumnProps } from '@/entities/tracker-column/ui/tracker-column'
import { columnsData } from './columns-data';
export const TaskTracker = () => {
  const [columnList, setColumnList] = useState<TrackerColumnProps[]>(columnsData);

  return (
    <div className='task-tracker-container'>
      <div className='actions'>
        <div className='actions-text'><ShapeSvg /> Процессы проекта CRM - система</div>
        <button className='button'>ДОБАВИТЬ СТОЛБЕЦ</button>
      </div>
      <div className='columns'>
        {
          columnList.map((columnListItem)  =>  (
            <TrackerColumn {...columnListItem} />
          ))
        }
      </div>
    </div>
  )
}
