import {
  Box,
  Card,
  CardContent,
  Grid,
  Paper,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { useStyles } from './useStyles';
import classNames from 'classnames';
import { useAppState } from '../../Provider/AppProvider';

export const Home = () => {
  console.log("home");
  const classes = useStyles();
  const { appName } = useAppState();

  return (
    <>
    <h1>Home</h1>
    
    {/* <Grid
      className={classes.background}
      container
      direction="row"
      spacing={4}
    >
      <Grid container item direction="column" xs={12} md={3}>
        <Grid item xs={12}>
          <Paper elevation={1}>
            <Card>
              <CardContent className={classes.content}>
                <Typography variant="h5">Welcome</Typography>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={1}>
            <Card>
              <CardContent
                className={classNames(
                  classes.content,
                  classes.contentLeft
                )}
              >
                <Typography variant="h2">To</Typography>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
      </Grid>
      <Grid item xs={12} md={9}>
        <Paper elevation={1}>
          <Card>
            <CardContent className={classes.contentBig}>
              <Typography variant="h1">{appName}</Typography>
            </CardContent>
          </Card>
        </Paper>
      </Grid>
      <Grid item xs={6} md={3}>
        <Paper elevation={1}>
          <Card>
            <CardContent className={classes.content}></CardContent>
          </Card>
        </Paper>
      </Grid>
      <Grid item xs={6} md={3}>
        <Paper elevation={1}>
          <Card>
            <CardContent className={classes.content}></CardContent>
          </Card>
        </Paper>
      </Grid>
      <Grid item xs={6} md={3}>
        <Paper elevation={1}>
          <Card>
            <CardContent className={classes.content}></CardContent>
          </Card>
        </Paper>
      </Grid>
      <Grid item xs={6} md={3}>
        <Paper elevation={1}>
          <Card>
            <CardContent className={classes.content}></CardContent>
          </Card>
        </Paper>
      </Grid>
    </Grid> */}
    </>
  );
};