import { Link } from 'react-router-dom';

export const Menu = () => {
  return(
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/education">Education</Link>
        </li>
        <li>
          <Link to="/work">Work</Link>
        </li>
      </ul>
    </nav>
  );
}
