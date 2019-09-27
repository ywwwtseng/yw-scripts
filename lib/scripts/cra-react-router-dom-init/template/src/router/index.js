import React from 'react';
import { 
  HashRouter,
  Switch,
  Route,
  Redirect,
  withRouter,
} from 'react-router-dom';
import Home from '../views/Home';

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const Login = withRouter(({ history }) => {
  return (
    <button
      onClick={() => {
        fakeAuth.authenticate(() => history.push("/protected"));
      }}
    >
      Sign in
    </button>
  );
});

const Protected = () => (<div>Protected</div>);
const NoMatch = () => (<div>NoMatch</div>);

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => fakeAuth.isAuthenticated 
          ? (<Component {...props} />) 
          : (<Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />)
      }
    />
  );
};

const Router = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/protected" component={Protected} />
        <Route render={NoMatch} />
      </Switch>
    </HashRouter>
  );
};

export default Router;