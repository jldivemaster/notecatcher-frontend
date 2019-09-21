import React from 'react'
import SignIn from './SignIn'
import Register from './Register'
import '../App.scss'

export default class SignInContainer extends React.Component {
  constructor(props) {
      super(props);
    this.state = { currentView: 'signIn' }
  };

  render() {
     switch(this.props.selectView) {
       case 'Sign In':
        return(
                <SignIn handleSignIn={this.props.handleSignIn} toggleView={this.props.toggleView} />
               );
       case 'Register':
        return( <Register handleRegister={this.props.handleRegister} toggleView={this.props.toggleView} />
                );
       case 'Register Success':
        return(
                <SignIn handleSignIn={this.props.handleSignIn} toggleView={this.props.toggleView} message="Your account has been created!  Log in to continue."/>
               );
      case 'Register Fail':
        return(
                <Register handleRegister={this.props.handleRegister} toggleView={this.props.toggleView} message={this.props.message}/>
              );
      case 'Sign In Fail':
        return(
                <SignIn handleSignIn={this.props.handleSignIn} toggleView={this.props.toggleView} message={this.props.message}/>
              );
      case 'Sign Out':
        return(
                <SignIn handleSignIn={this.props.handleSignIn} toggleView={this.props.toggleView} message="You are logged out." />
              );
       default:
        return(
                <SignIn handleSignIn={this.props.handleSignIn} toggleView={this.props.toggleView} message="Default hit. Check switch in container component." />
               )
     }
  };
}
