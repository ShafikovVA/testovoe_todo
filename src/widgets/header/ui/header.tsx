import './header.css';
import { LogoSvg } from './icons/logo-svg';
import { NotificationSvg } from './icons/notification-svg';
// import RublIcon from './ui/rubl-icon.png';
import RublIcon from './images/rubl-icon.png';
import Avatar from './images/avatar.png';

export const Header = () => {
  return (
      <header className='header'>

        <div className='logo'>
          <LogoSvg />
          <nav>aeveli.todo</nav>
        </div>

        <div className='navigation'>
          <nav className='nav-item'>Задачи</nav>
          <nav className='nav-item active'>Проекты</nav>
          <nav className='nav-item'>Статистика</nav>
          <nav className='nav-item'>Финансы</nav>
          <nav className='nav-item'>План</nav>
          <nav className='nav-item'>Пользователи</nav>
        </div>

        <div className='profile'>
          <div className='balance'>
            <span>60 000</span>
            <span><img src={RublIcon} alt="иконка рубля" /></span>
          </div>
          <div className='notifications'>
            <button className='notification-button'>
              <NotificationSvg />
            </button>
          </div>
          <div className='user-info'>
            <img className='avatar' src={Avatar} alt="аватар"  />
            <nav className='profile-button'>
             Назир
              <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.42297 1.15327L5.37191 4.37731C5.1665 4.5409 4.8335 4.5409 4.62809 4.37731L0.577029 1.15327C0.474324 1.07159 0.474324 0.938953 0.577029 0.857268L0.948941 0.561264C1.05165 0.479579 1.21815 0.479579 1.32085 0.561264L4.81391 3.34151C4.91662 3.4232 5.08338 3.4232 5.18582 3.34151L8.67915 0.561264C8.78185 0.479579 8.94835 0.479579 9.05106 0.561264L9.42297 0.857268C9.52568 0.938953 9.52568 1.07159 9.42297 1.15327Z" fill="white"/>
              </svg>
            </nav>
          </div>
        </div>

      </header>
  );
};
