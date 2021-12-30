import './style.css';

import GolangLogo from './images/golang.png';
import CppLogo from './images/cpp.png';
import CSharpLogo from './images/csharp.png';
import PythonLogo from './images/python.png';
import TypeScriptLogo from './images/typescript.png';
import LatexLogo from './images/latex.png';

import {
  Typography,
} from '@mui/material';

import { SkillCard } from '../../components/skill-card/SkillCard';

export const Skills = () => {
  return (
    <div className="root">
      <div className="header"></div>
      <Typography variant="h3">Languages</Typography>
      <SkillCard title={'Golang'} image={GolangLogo} rating={3} />
      <SkillCard title={'C++'} image={CppLogo} rating={2} />
      <SkillCard title={'C#'} image={CSharpLogo} rating={3} />
      <SkillCard title={'Python'} image={PythonLogo} rating={2} />
      <SkillCard title={'TypeScript'} image={TypeScriptLogo} rating={1} />
      <SkillCard title={'LaTeX'} image={LatexLogo} rating={4} />

      <Typography variant="h3">Frameworks</Typography>

      <Typography variant="h3">Dev ops</Typography>

      <Typography variant="h3">Code editors</Typography>
    </div>
  );
}
