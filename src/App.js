import React, { useEffect, useState } from 'react';
import { Box, LinearProgress } from '@material-ui/core';
import { Redirect, Route, Switch } from 'react-router-dom';
import { NavBarWithRouter } from './Components/NavBar/NavBar';
import { useStyles } from './Components/NavBar/useStyles';
// import { Footer } from './Components/Footer/Footer';
import { useAppState } from "./Provider/AppProvider";
import axios from 'axios';
import { routes } from './Routes/routes';
import { employeeRoutes } from "./Routes/employeeRoutes.js";
import { mentorRoutes } from "./Routes/mentorRoutes.js";

export const App = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const [role, setRole] = useState()

  const {apis} = useAppState()

  const handleToggleLoading = () => {
    setIsLoading((isLoading) => !isLoading);
  };

  const extra = {
    toggleLoading: handleToggleLoading,
    isLoading: isLoading,
  };

  // console.log('//apis:',apis.user);

  useEffect(() => {
    const GetProfile = async() => {
      const options = {
        method: 'GET',
        headers: {'Content-type':'application/json'},
        withCredentials: true,
        url: apis.user
      }
      try {
        const {data} = await axios(options)
        console.log('😍data:', data.role);
        setRole(data.role)
      } catch (error) {
        console.error(error)
      }
    }
    GetProfile()
  }, [apis.user])
  

  console.log("App");

  return (
    <div className={classes.root}>
      <NavBarWithRouter />
      <main className={classes.grow}>
        <div className={classes.toolbar} />
        {isLoading && <LinearProgress />}
        <Box mx={4} mt={4} mb={6}>
          {role ==='super' && (
          <Switch>
            {routes.map(
              (
                { component: Component, path, exact, ...route },
                index
              ) => (
                <Route
                  key={index}
                  path={path}
                  exact={exact}
                  render={(props) => (
                    <Component {...route} {...extra} {...props} />
                  )}
                />
              )
            )}
            <Redirect to="/404" />
          </Switch>
          )}

          {role ==='mentor' && (
          <Switch>
            {mentorRoutes.map(
              (
                { component: Component, path, exact, ...route },
                index
              ) => (
                <Route
                  key={index}
                  path={path}
                  exact={exact}
                  render={(props) => (
                    <Component {...route} {...extra} {...props} />
                  )}
                />
              )
            )}
             <Redirect to="/404" />
          </Switch>
          )}

          {role ==='employee' && (
          <Switch>
            {employeeRoutes.map(
              (
                { component: Component, path, exact, ...route },
                index
              ) => (
                <Route
                  key={index}
                  path={path}
                  exact={exact}
                  render={(props) => (
                    <Component {...route} {...extra} {...props} />
                  )}
                />
              )
            )}
            <Redirect to="/404" />
          </Switch>
          )}

        </Box>
      </main>
      {/* <Footer /> */}
    </div>
  );
};