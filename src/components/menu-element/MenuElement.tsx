import MediaQuery from 'react-responsive';
import { Link, useLocation } from 'react-router-dom';

import './style.css';

type MenuElementProps = {
  Icon: any,
  title: string,
  path: string,
};

const GetPath = () => {
  const location = useLocation();
  return location.pathname;
}

export const MenuElement = ({Icon, title, path}: MenuElementProps) => {
  return(
    <li>
      <Link to={path} className={'link' + (GetPath() === path ? ' current-link' : '')}>
        <Icon className="icon" />
        <MediaQuery query="(min-device-width: 600px)">
          {title}
        </MediaQuery>
      </Link>
    </li>
  );
}
