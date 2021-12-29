import './style.css';
import * as React from 'react';

import { useMediaQuery } from 'react-responsive';

import { Tab, Tabs } from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ComputerRoundedIcon from '@mui/icons-material/ComputerRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';

type MenuProps = {
  tabValue: number,
  setTabValue: React.Dispatch<number>,
};

export const Menu = ({tabValue, setTabValue}: MenuProps) => {
  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const isFull = useMediaQuery({query: '(min-device-width: 600px)'});

  return(
    <Tabs
      value={tabValue}
      onChange={handleChange}
      textColor="secondary"
      indicatorColor="secondary"
      aria-label="icon label nav tabs example"
      variant={isFull ? 'fullWidth' : 'scrollable'}
      className="tabs"
    >
      <Tab icon={<HomeRoundedIcon />} label="HOME" />
      <Tab icon={<ComputerRoundedIcon />} label="SKILLS" />
      <Tab icon={<SchoolRoundedIcon />} label="EDUCATION" />
      <Tab icon={<WorkRoundedIcon />} label="WORK" />
      <Tab icon={<AccountTreeRoundedIcon />} label="PROJECTS" />
      <Tab icon={<CallRoundedIcon />} label="CONTACTS" />
    </Tabs>
  );
}
