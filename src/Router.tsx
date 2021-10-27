import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import { Menu } from './components/menu/Menu';
import { Home } from './views/home/Home';

export const Router = () => {
  return (
   <BrowserRouter>
      <Menu />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
