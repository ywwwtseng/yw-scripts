import React from 'react';
import logo from '../assets/logo.svg';

const styles = {
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
    color: '#09d3ac',
  },
};

const Home = () => {
  return (
    <div style={styles.app} className="App">
      <header style={styles.appHeader} className="App-header">
        <img
          style={styles.appLogo}
          src={logo}
          className="App-logo"
          alt="logo"
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          style={styles.appLink}
          className="App-link"
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
