import React, { createContext, useContext } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { appTheme } from './appTheme';

const Context = createContext();
const { Provider } = Context;

export const AppProvider = ({ children }) => {
  const appName = 'I-pangram React App';
  const serverAddress = 'http://127.0.0.1:8080';
  const apis = {
    signin: serverAddress + '/signin',
    signup: serverAddress + '/signup',
    user: serverAddress + '/api/user',
  };

  return (
    <ThemeProvider theme={appTheme}>
      <Provider value={{ apis, appName }}>{children}</Provider>
    </ThemeProvider>
  );
};

export const useAppState = () => useContext(Context);