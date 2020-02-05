import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import logo from '../logo.svg';

const useStyles = makeStyles(theme =>
  createStyles({
    app: {
      textAlign: 'center',
    },
    appLogo: {
      height: '40vmin',
    },
    appHeader: {
      backgroundColor: '#282c34',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 'calc(10px + 2vmin)',
      color: 'white',
    },
    appLink: {
      color: theme.palette.primary.main,
    },
  })
);

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <header className={classes.appHeader}>
        <img className={classes.appLogo} src={logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={classes.appLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default Home;
