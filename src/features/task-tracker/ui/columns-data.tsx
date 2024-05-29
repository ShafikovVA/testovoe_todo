import { TrackerColumnProps } from '@/entities/tracker-column/ui/tracker-column';
import { PinSvg } from './icons/pin-svg';
import { PlayButtonSvg } from './icons/play-button-svg';
import { DoneSvg } from './icons/done-svg';
import { DoneOver } from './icons/done-over-svg';
import { Task } from '@/entities/task';
import Avatar1 from './images/avatar1.png';
import Avatar2 from './images/avatar2.png';

export const columnsData: TrackerColumnProps[] = [
  {
    title: 'Беклог',
    icon:  <PinSvg />,
    children: [
      <Task id={20413} title={'Интерфейс динамики кадров на предприятии'} images={[Avatar1, Avatar2]} />,
      <Task id={20413} title={'Ежемесячный отчёт для куратора'} images={[Avatar1, Avatar2]} />,
      <Task id={20413} title={'Статистика по заявкам'} images={[Avatar1, Avatar2]} />,
    ],
  },
  {
    title: 'В работе',
    icon:  <PlayButtonSvg />,
    children: [
      <Task id={20413} title={'Заявки сгруппировать по заявкам'} images={[Avatar1, Avatar2]} />,
      <Task id={20413} title={'Ограничения по безопасности'} images={[Avatar1, Avatar2]} />,
    ],
  },
  {
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
