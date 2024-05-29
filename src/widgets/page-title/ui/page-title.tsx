import { PlaySvg } from './icons/play-svg';
import './page-title.css';

export const PageTitle = () => (
  <div className='page-title'>
    <h1 className='title'>Проекты</h1>
    <div className="breadcrumbs">
      <PlaySvg />
      <div className="breadcrumb">CRM - система / <span className='active'>Процессы</span></div>

    </div>
  </div>
)
