import { ShapeSvg } from './icons/shape-svg'
import './task-tracker.css'
import { TrackerColumn } from '@/entities/tracker-column'
import { useTasksColumns, useTasksCulumnsDispatch } from '../model/contexts/TaskColumnContext';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { TaskProps } from '@/entities/task';

export const TaskTracker = () => {
  const columnList = useTasksColumns();
  const columnListDispatch = useTasksCulumnsDispatch();

  const addNewColumn = () => {
    columnListDispatch && columnListDispatch({
      type: 'added',
    });
  }

  const addTaskInColumn = (task: TaskProps, columnId: number) => {
    columnListDispatch && columnListDispatch({
      type: 'changed',
      task,
      id: columnId,
    });
  }

  const dragEndHandler = (event: DragEndEvent) => {
    if (event.over && event.over.id) {
      console.log(event.over.id);
      addTaskInColumn(event.active.data.current as TaskProps, Number(event.over.id));
    }
  }


  return (
    <DndContext onDragEnd={dragEndHandler}>
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
    </DndContext>
  )
}
