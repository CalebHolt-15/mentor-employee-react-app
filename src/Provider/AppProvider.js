import React, { createContext, useContext } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { appTheme } from './appTheme';

const Context = createContext();
const { Provider } = Context;

export const AppProvider = ({ children }) => {
  const appName = 'I-pangram React App';
  const serverAddress = 'https://127.0.0.1:8090';
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