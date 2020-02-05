import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import createStore from './createStore';
import theme from './styles/theme';
import Router from './router';

const store = createStore();

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <CssBaseline />
          <Router />
        </React.Fragment>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
