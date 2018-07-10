import * as React from "react";
import { Route, Link, Redirect, withRouter, Switch } from "react-router-dom";
import styled from "styled-components";
import {
  Logo,
  SideNav,
  SideNavLink,
  MainContent,
  Content,
  SubNav
} from "./styled";
import CodeEditor from "./route_editor";

const Root = styled.div`
  width: 100%;
`;

const Greeting = () => <h1>Hello there</h1>;
const Public = () => <h3>Public</h3>;
const Protected = () => <h3>Protected</h3>;

const fakeAuth = {
  isAuthenticated: true,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const AuthButton = withRouter(
  ({ history }) =>
    fakeAuth.isAuthenticated ? (
      <p>
        Welcome!{" "}
        <button
          onClick={() => {
            fakeAuth.signout(() => history.push("/"));
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    )
);

interface LoginProps {
  location: {
    state: {
      from: {
        pathname: string;
      };
    };
  };
}

interface LoginState {
  redirectToReferrer: boolean;
}

class Login extends React.Component<LoginProps, LoginState> {
  state = {
    redirectToReferrer: false
  };

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    );
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const Home = () => (
  <Root>
    <SideNav>
      <Logo>
        <img
          height={50}
          src="https://lokalleads.s3.amazonaws.com/images/homepage/logo_bw.png"
        />
      </Logo>
      <SideNavLink to="/pdf-template-editor">Pdf editor</SideNavLink>
    </SideNav>
    <MainContent>
      <SubNav />
      <Content>
        <PrivateRoute path="/pdf-template-editor" component={CodeEditor} />
      </Content>
    </MainContent>
  </Root>
);

export default () => (
  <Root>
    <AuthButton />
    <Route path="/login" component={Login} />
    <PrivateRoute exact path="/" component={Home} />
  </Root>
);
