import { Link } from 'react-router-dom';
import {
  FiHome,
  FiCpu,
  FiBook,
  FiBriefcase,
  FiGithub,
  FiUser,
} from 'react-icons/fi';

import './style.css';

export const Menu = () => {
  return(
    <nav>
      <ul>
        <li>
          <Link to="/">
            <FiHome />
            Home
          </Link>
        </li>
        <li>
          <Link to="/skills">
            <FiCpu />
            Skills
          </Link>
        </li>
        <li>
          <Link to="/education">
            <FiBook />
            Education
          </Link>
        </li>
        <li>
          <Link to="/work">
            <FiBriefcase />
            Work
          </Link>
        </li>
        <li>
          <Link to="/projects">
            <FiGithub />
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contacts">
            <FiUser />
            Contact me
          </Link>
        </li>
      </ul>
    </nav>
  );
}
