import { CubesSvg } from './icons/cubes-svg';
import { LupaSvg } from './icons/lupa-svg';
import { PlusSvg } from './icons/plus-svg';
import { QuestionSvg } from './icons/question-svg';
import './sidebar.css';

export const Sidebar = () => (
  <div className='sidebar'>
    <div className="actions">
      <LupaSvg />
      <PlusSvg />
      <CubesSvg />
    </div>

    <div className="sidebar-button">
      <svg className='sidebar-icon' width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.63318 0.154058L9.69329 8.25618C10.1022 8.667 10.1022 9.333 9.69329 9.74382L1.63318 17.8459C1.42897 18.0514 1.09738 18.0514 0.893169 17.8459L0.15316 17.1021C-0.051053 16.8967 -0.051053 16.5637 0.15316 16.3583L7.10378 9.37218C7.30799 9.16676 7.30799 8.83324 7.10378 8.62835L0.15316 1.64171C-0.051053 1.43629 -0.051053 1.10329 0.15316 0.897882L0.893169 0.154058C1.09738 -0.0513535 1.42897 -0.0513535 1.63318 0.154058Z" fill="white"/>
      </svg>
    </div>
    <div className="info">
      <QuestionSvg />
    </div>
  </div>
)
