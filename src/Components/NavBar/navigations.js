import React from 'react';
// import {
//   AddBox ,
//   Home ,
//   AmpStories,
//   ViewList ,
//   AccountBox ,
// } from '@mui/icons-material';

export const navigations = [
  { path: '/', 
//   icon: <Home />, 
  name: 'Home' },
  {
    path: '/item/add',
    // icon: <AddBox />,
    name: 'Item Registration',
  },
  {
    path: '/item/list',
    // icon: <AmpStories />,
    name: 'Item List',
  },
  {
    path: '/item/table',
    // icon: <ViewList />,
    name: 'Item Table',
  },
  {
    path: '/user/profile',
    // icon: <AccountBox />,
    name: 'Profile',
  },
];