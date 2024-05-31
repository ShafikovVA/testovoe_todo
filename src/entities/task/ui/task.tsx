import { useDraggable } from '@dnd-kit/core';
import './task.css'
import { ArrowsSvg } from './icons/arrows-svg';


export interface TaskProps {
  id: number;
  title: string;
  titleId: number;
  images: string[];
  completed?: boolean;
  isDragged?: boolean;
}

export interface TaskDraggableArguments {
  id: number;
  task: TaskProps;
}

export const Task = (props: TaskProps) => {
  const { id, title, images, completed } = props;

  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: id,
    data: props,
  });

  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    cursor: 'grab',
    zIndex: '2',
  } : undefined;

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      className={`task`}
    >
      <div className='task-header'>
        <div className="avatar">
          {
            images.map((img) => (
              <img key={img} src={img} alt="avatar" />
            ))
          }
        </div>
        <ArrowsSvg />
      </div>
      <div className={`task-content ${completed ? 'completed' : ''}`}>
        <span className='identify'>#{id}:</span> {title}
      </div>
    </div>
  )
}
