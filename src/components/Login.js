import React from "react";
import { AmplifySignIn } from "@aws-amplify/ui-react";
import { Redirect } from "react-router-dom";

class Login extends React.Component {
  state = { redirect: null };

  redirecting = () => {
    this.setState({ redirect: "/" });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <div style={{ marginLeft: 400, marginTop: 75 }}>
        <AmplifySignIn />
      </div>
    );
  }
}

export default Login;
