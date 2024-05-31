import { createContext, useContext } from 'react';
import { PlayButtonSvg } from '../../ui/icons/play-button-svg';
import { PinSvg } from '../../ui/icons/pin-svg';
import { DoneSvg } from '../../ui/icons/done-svg';
import { DoneOver } from '../../ui/icons/done-over-svg';
import Avatar1 from '../../ui/images/avatar1.png';
import Avatar2 from '../../ui/images/avatar2.png';
import { TrackerColumnProps } from '@/entities/tracker-column';
import { TaskProps } from '@/entities/task';

export const TasksColumnContext = createContext<TrackerColumnProps[] | null>(null);
export const TasksColumnDispatchContext = createContext<React.Dispatch<TasksColumnReducerAction> | null>(null);

export function useTasksColumns() {
  return useContext(TasksColumnContext);
}

export function useTasksCulumnsDispatch() {
  return useContext(TasksColumnDispatchContext);
}

interface TasksColumnReducerAction{
  id?: number;
  task?: TaskProps;
  type: 'added' | 'changed' | 'deleted';
}

export function tasksReducer(tasks: TrackerColumnProps[], action: TasksColumnReducerAction) {
  switch (action.type) {
    case 'added': {
      console.log(tasks[tasks.length - 1]);
      return [...tasks, {
        id: (tasks[tasks.length - 1] ? tasks[tasks.length - 1].id : 0) + 1,
        title: 'Новая категория',
        icon: <PinSvg />,
      }] as TrackerColumnProps[];
    }
    case 'changed': {
      if (!action.id && !action.task){
        throw Error('Unexpected id and task');
      }
      const checkNoChanges = tasks.find((taskColumn)  => taskColumn.tasks?.find((task) => action.task && task.id ===  action.task.id) )?.id === action.id;
      const newTasks: TrackerColumnProps[] = !checkNoChanges ? tasks.map((taskColumn) => (
        taskColumn.id === action.id ? {
          ...taskColumn,
          tasks: taskColumn.tasks && action.task ?
            taskColumn.tasks.concat(action.task) :
            [action.task],
        } : {
          ...taskColumn,
          tasks: taskColumn.tasks && taskColumn.tasks.filter(task =>
            action.task && task.id !== action.task.id,
          ),
        }
      )
    ) : tasks;
      return newTasks;
    }
    case 'deleted': {
      if (!action.id){
        throw Error('Unexpected id');
      }
      return tasks.filter(taskColumn => taskColumn.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

export const initialTasksData = [
  {
    id: 1,
    title: 'Беклог',
    icon:  <PinSvg />,
    tasks: [
      {id:1, titleId:20413, title:'Интерфейс динамики кадров на предприятии', images:[Avatar1, Avatar2]},
      {id:2, titleId:20413, title:'Ежемесячный отчёт для куратора', images:[Avatar1, Avatar2]},
      {id:3, titleId:20413, title:'Статистика по заявкам', images:[Avatar1, Avatar2]},
    ],
  },
  {
    id: 2,
    title: 'В работе',
    icon:  <PlayButtonSvg />,
    tasks: [
      { id:4, titleId:20413, title:'Заявки сгруппировать по заявкам', images:[Avatar1, Avatar2] },
      { id:5, titleId:20413, title:'Ограничения по безопасности', images:[Avatar1, Avatar2] },
    ],
  },
  {
    id: 3,
    title: 'Выполнена',
    icon:  <DoneSvg />,
    tasks: [
      { id:6, titleId:20413, completed:true, title:'Рейтинг мастеров в интерфейсе мереджера', images:[Avatar1, Avatar2] },
      { id:7, titleId:20413, completed:true, title:'Проживание: новое поле для тех кто работает', images:[Avatar1, Avatar2] },
      { id:8, titleId:20413, completed:true, title:'Перенос данных в конце месяца', images:[Avatar1, Avatar2] },
      { id:9, titleId:20413, completed:true, title:'Доработки по интерфейсу «Плана»', images:[Avatar1, Avatar2] },
      { id:10, titleId:20413, completed:true, title:'Подвешенная заявка', images:[Avatar1, Avatar2] },
      { id:11, titleId:20413, completed:true, title:'Интерфейс динамики кадров на предприятии', images:[Avatar1, Avatar2] },
    ],
  },
  {
    id: 4,
    title: 'Сдана',
    icon:  <DoneOver />,
    tasks: [
      { id:12, titleId:20413, title:'Временной промежуток при фильтрации', images:[Avatar1, Avatar2] },
      { id:13, titleId:20413, title:'Статистика по икочникам звонка', images:[Avatar1, Avatar2] },
      { id:14, titleId:20413, title:'Добавить график к статистике пользователей (количества регистраций)', images:[Avatar1, Avatar2] },
      { id:15, titleId:20413, title:'Создать тестовую сборку сервиса ( для обработки нововведений )', images:[Avatar1, Avatar2] },
    ],
  },
];
