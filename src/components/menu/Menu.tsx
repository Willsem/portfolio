import {
  FiHome,
  FiCpu,
  FiBook,
  FiBriefcase,
  FiGithub,
  FiUser,
} from 'react-icons/fi';

import './style.css';

import { MenuElement } from '../menu-element/MenuElement';

export const Menu = () => {
  return(
    <nav>
      <ul>
        <MenuElement Icon={FiHome} title="Home" path="/" />
        <MenuElement Icon={FiCpu} title="Skills" path="/skills" />
        <MenuElement Icon={FiBook} title="Education" path="/education" />
        <MenuElement Icon={FiBriefcase} title="Work" path="/work" />
        <MenuElement Icon={FiGithub} title="Projects" path="/projects" />
        <MenuElement Icon={FiUser} title="Contact me" path="/contacts" />
      </ul>
    </nav>
  );
}
