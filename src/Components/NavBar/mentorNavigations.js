import { AccountBox, AddBox, AddCircle, AmpStories, Email, Home, ViewList } from '@material-ui/icons';
import React from 'react';


export const mentorNavigations = [
  { path: '/', 
    icon: <Home />, 
    name: 'Home' },
  {
    path: '/mentor',
    icon: <Email />,
    name: 'MentorDashboard',
  }
  // {
  //   path: '/item/list',
  //   icon: <AddCircle />,
  //   name: 'Mentor Add',
  // },
 ];