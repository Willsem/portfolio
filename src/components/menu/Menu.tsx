import { Link, useLocation } from 'react-router-dom';
import {
  FiHome,
  FiCpu,
  FiBook,
  FiBriefcase,
  FiGithub,
  FiUser,
} from 'react-icons/fi';
import MediaQuery from 'react-responsive';

import './style.css';

const GetPath = () => {
  const location = useLocation();
  return location.pathname;
}

export const Menu = () => {
  return(
    <nav>
      <ul>
        <li>
          <Link to="/" className={'link' + (GetPath() === '/' ? ' current-link' : '')}>
            <FiHome className="icon" />
            <MediaQuery query="(min-device-width: 600px)">
              Home
            </MediaQuery>
          </Link>
        </li>
        <li>
          <Link to="/skills" className={'link' + (GetPath() === '/skills' ? ' current-link' : '')}>
            <FiCpu className="icon" />
            <MediaQuery query="(min-device-width: 600px)">
              Skills
            </MediaQuery>
          </Link>
        </li>
        <li>
          <Link to="/education" className={'link' + (GetPath() === '/education' ? ' current-link' : '')}>
            <FiBook className="icon" />
            <MediaQuery query="(min-device-width: 600px)">
              Education
            </MediaQuery>
          </Link>
        </li>
        <li>
          <Link to="/work" className={'link' + (GetPath() === '/work' ? ' current-link' : '')}>
            <FiBriefcase className="icon" />
            <MediaQuery query="(min-device-width: 600px)">
              Work
            </MediaQuery>
          </Link>
        </li>
        <li>
          <Link to="/projects" className={'link' + (GetPath() === '/projects' ? ' current-link' : '')}>
            <FiGithub className="icon" />
            <MediaQuery query="(min-device-width: 600px)">
              Projects
            </MediaQuery>
          </Link>
        </li>
        <li>
          <Link to="/contacts" className={'link' + (GetPath() === '/contacts' ? ' current-link' : '')}>
            <FiUser className="icon" />
            <MediaQuery query="(min-device-width: 600px)">
              Contact me
            </MediaQuery>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
