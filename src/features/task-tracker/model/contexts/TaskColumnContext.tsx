import { Task } from '@/entities/task';
import { createContext, useContext } from 'react';
import { PlayButtonSvg } from '../../ui/icons/play-button-svg';
import { PinSvg } from '../../ui/icons/pin-svg';
import { DoneSvg } from '../../ui/icons/done-svg';
import { DoneOver } from '../../ui/icons/done-over-svg';
import Avatar1 from '../../ui/images/avatar1.png';
import Avatar2 from '../../ui/images/avatar2.png';
import { TrackerColumnProps } from '@/entities/tracker-column';

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
  type: 'added' | 'deleted';
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
    children: [
      <Task id={20413} title={'Интерфейс динамики кадров на предприятии'} images={[Avatar1, Avatar2]} />,
      <Task id={20413} title={'Ежемесячный отчёт для куратора'} images={[Avatar1, Avatar2]} />,
      <Task id={20413} title={'Статистика по заявкам'} images={[Avatar1, Avatar2]} />,
    ],
  },
  {
    id: 2,
    title: 'В работе',
    icon:  <PlayButtonSvg />,
    children: [
      <Task id={20413} title={'Заявки сгруппировать по заявкам'} images={[Avatar1, Avatar2]} />,
      <Task id={20413} title={'Ограничения по безопасности'} images={[Avatar1, Avatar2]} />,
    ],
  },
  {
    id: 3,
    title: 'Выполнена',
    icon:  <DoneSvg />,
    children: [
      <Task id={20413} completed title={'Проживание: новое поле для тех кто работает'} images={[Avatar1, Avatar2]} />,
      <Task id={20413} completed title={'Рейтинг мастеров в интерфейсе мереджера'} images={[Avatar1, Avatar2]} />,
      <Task id={20413} completed title={'Перенос данных в конце месяца'} images={[Avatar1, Avatar2]} />,
      <Task id={20413} completed title={'Доработки по интерфейсу «Плана»'} images={[Avatar1, Avatar2]} />,
      <Task id={20413} completed title={'Подвешенная заявка'} images={[Avatar1, Avatar2]} />,
      <Task id={20413} completed title={'Интерфейс динамики кадров на предприятии'} images={[Avatar1, Avatar2]} />,
    ],
  },
  {
    id: 4,
    title: 'Сдана',
    icon:  <DoneOver />,
    children: [
      <Task id={20413} title={'Временной промежуток при фильтрации'} images={[Avatar1, Avatar2]} />,
      <Task id={20413} title={'Статистика по икочникам звонка'} images={[Avatar1, Avatar2]} />,
      <Task id={20413} title={'Добавить график к статистике пользователей (количества регистраций)'} images={[Avatar1, Avatar2]} />,
      <Task id={20413} title={'Создать тестовую сборку сервиса ( для обработки нововведений )'} images={[Avatar1, Avatar2]} />,
    ],
  },
];
