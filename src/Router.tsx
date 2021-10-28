import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Menu } from './components/menu/Menu';
import { Home } from './views/home/Home';
import { Skills } from './views/skills/Skills';
import { Education } from './views/education/Education';
import { Work } from './views/work/Work';
import { Projects } from './views/projects/Projects';
import { Contacts } from './views/contacts/Contacts';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/skills" component={Skills}></Route>
          <Route exact path="/education" component={Education}></Route>
          <Route exact path="/work" component={Work}></Route>
          <Route exact path="/projects" component={Projects}></Route>
          <Route exact path="/contacts" component={Contacts}></Route>
        </Switch>
        <Menu />
      </div>
    </Router>
  );
}
