import * as React from 'react';

import { Menu } from './components/menu/Menu';
import { Home } from './views/home/Home';
import { Skills } from './views/skills/Skills';
import { Education } from './views/education/Education';
import { Work } from './views/work/Work';
import { Projects } from './views/projects/Projects';
import { Contacts } from './views/contacts/Contacts';

export const AppRouter = () => {
  const [tabValue, setTabValue] = React.useState(0);

  return (
    <div>
      <Menu tabValue={tabValue} setTabValue={setTabValue}/>
      {
        {
          0: <Home />,
          1: <Skills />,
          2: <Education />,
          3: <Work />,
          4: <Projects />,
          5: <Contacts />,
        }[tabValue]
      }
    </div>
  );
}
