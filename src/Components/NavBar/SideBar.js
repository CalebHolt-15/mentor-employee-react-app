import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Typography,
  useMediaQuery,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useStyles } from './useStyles';
import clsx from 'clsx';
import { Cancel as CancelIcon } from '@material-ui/icons';
import { useAppState } from "../../Provider/AppProvider";
import axios from 'axios';
import { navigations } from './navigations';
import { mentorNavigations } from './mentorNavigations';
import { employeeNavigations } from './employeeNavigations';

const SideBar = ({ opened, toggleDrawer, history, window }) => {
  const classes = useStyles();
  const {apis, appName} = useAppState()
  const [role, setRole] = useState()


  const isXS = useMediaQuery((theme) => theme.breakpoints.down('xs'));
  const container =
    window !== undefined ? () => window().document.body : undefined;


  useEffect(() => {
    const getProfile = async() =>{
      const options ={
        method: 'GET',
        headers: {'Content-type':'application/json'},
        withCredentials: true,
        url: apis.user
      }
      try {
        const {data} = await axios(options)
        console.log('😛data:',data);
        setRole(data.role)
        
      } catch (error) {
        console.error(error)
      }
    }
    getProfile()
  }, [apis.user, role])

  console.log("😛role",role);
    

  const getNavigation = (role) => {
    console.log('😴', role);
    return (
      (role === 'super' &&
        navigations.map((navigation, index) => {
          return (
            <ListItem
              button
              onClick={() => {
                if (isXS) {
                  toggleDrawer();
                }
                history.push(navigation.path);
              }}
              key={index}
            >
              <Tooltip title={navigation.name} placement="right">
                <ListItemIcon>{navigation.icon}</ListItemIcon>
              </Tooltip>
              <ListItemText primary={navigation.name} />
            </ListItem>
          );
        })) ||
      (role === 'super' &&
        navigations.map((navigation, index) => {
          return (
            <ListItem
              button
              onClick={() => {
                if (isXS) {
                  toggleDrawer();
                }
                history.push(navigation.path);
              }}
              key={index}
            >
              <Tooltip title={navigation.name} placement="right">
                <ListItemIcon>{navigation.icon}</ListItemIcon>
              </Tooltip>
              <ListItemText primary={navigation.name} />
            </ListItem>
          );
        })) ||
      (role === 'mentor' &&
        mentorNavigations.map((navigation, index) => {
          return (
            <ListItem
              button
              onClick={() => {
                if (isXS) {
                  toggleDrawer();
                }
                history.push(navigation.path);
              }}
              key={index}
            >
              <Tooltip title={navigation.name} placement="right">
                <ListItemIcon>{navigation.icon}</ListItemIcon>
              </Tooltip>
              <ListItemText primary={navigation.name} />
            </ListItem>
          );
        })) ||
        (role === 'employee' &&
          employeeNavigations.map((navigation, index) => {
            return (
              <ListItem
                button
                onClick={() => {
                  if (isXS) {
                    toggleDrawer();
                  }
                  history.push(navigation.path);
                }}
                key={index}
              >
                <Tooltip title={navigation.name} placement="right">
                  <ListItemIcon>{navigation.icon}</ListItemIcon>
                </Tooltip>
                <ListItemText primary={navigation.name} />
              </ListItem>
            );
          }))
    );
  };

  return (
    <nav className={classes.drawer}>
      {isXS ? (
        <Drawer
          container={container}
          variant="temporary"
          anchor="top"
          open={opened}
          onClose={toggleDrawer}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <List>
            <ListItem className={classes.root}>
              <Box my={2}>
                <Typography variant="h4" noWrap>
                  i-Pangram App
                </Typography>
              </Box>
              <div className={classes.grow} />
              <IconButton onClick={toggleDrawer}>
                <CancelIcon />
              </IconButton>
            </ListItem>
            <Divider />
            {getNavigation(role, navigations, mentorNavigations, employeeNavigations)}
          </List>
        </Drawer>
      ) : (
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: opened,
            [classes.drawerClose]: !opened,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: opened,
              [classes.drawerClose]: !opened,
            }),
          }}
        >
          <div className={classes.toolbar} />
          <List>{getNavigation(role, navigations, mentorNavigations, employeeNavigations)}</List>
        </Drawer>
      )}
    </nav>
  );
};

export const SideBarWithRouter = withRouter(SideBar);
