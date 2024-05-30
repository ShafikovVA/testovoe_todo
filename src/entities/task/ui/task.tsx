import { useRef } from 'react';
import './task.css'
import { ArrowsSvg } from './icons/arrows-svg';


export interface TaskProps {
  id: number;
  title: string;
  images: string[];
  completed?: boolean;
  isDragged?: boolean;
}

export const Task = (props: TaskProps) => {
  const { id, title, images, completed } = props;
  const taskRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={taskRef}
      className={`task`}
    >
      <div className='task-header'>
        <div className="avatar">
          {
            images.map((img) => (
              <img src={img} alt="" />
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
