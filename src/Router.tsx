import {
  BrowserRouter,
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

export const Router = () => {
  return (
   <BrowserRouter>
      <Menu />
      <Switch>
        <Route path="/">
          <Home />
        </Route>

        <Route path="/skills">
          <Skills />
        </Route>

        <Route path="/education">
          <Education />
        </Route>

        <Route path="/work">
          <Work />
        </Route>

        <Route path="/projects">
          <Projects />
        </Route>

        <Route path="/contacts">
          <Contacts />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
