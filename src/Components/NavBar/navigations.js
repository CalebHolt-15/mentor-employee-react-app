import { AccountBox, AddBox, AmpStories, Home, ViewList } from '@material-ui/icons';
import React from 'react';

export const navigations = [
  { path: '/', 
    icon: <Home />, 
    name: 'Home' },
  {
    path: '/super',
    icon: <AddBox />,
    name: 'Super Admin Registration',
  },
];
// {
//   path: '/item/list',
//   icon: <AmpStories />,
//   name: 'Item List',
// },
// {
//   path: '/item/table',
//   icon: <ViewList />,
//   name: 'Item Table',
// },
// {
//   path: '/user/profile',
//   icon: <AccountBox />,
//   name: 'Profile',
// },