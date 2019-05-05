import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation'
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import LandingPage from "./components/LandingPage";
import NotFound from "./components/NotFound";
import SearchPage from "./components/SearchPage";
import AccountPage from "./components/AccountPage";
import LogoutPage from "./components/LogoutPage.jsx";
import LoginPage from "./components/LoginPage.jsx";
import MainPage from "./components/MainPage";


/*const loadConversations = ()=>{
    return [
      {
        id: 345,
        name: "John Lennon",
        messages: [
                {id: 0, message: 'Cześć!', id_sender: 154},
                {id: 1, message: 'Hej', id_sender: 463},
                {id: 2, message: 'Co u Ciebie?', id_sender: 154},
                {id: 3, message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id orci in ligula feugiat condimentum id nec nibh. Curabitur vehicula pretium tortor quis aliquam. Etiam sed tellus pharetra, mattis mauris et, vestibulum erat. Curabitur euismod, tellus sed iaculis egestas, quam erat vestibulum turpis, laoreet egestas magna enim non turpis. Proin sapien lectus, facilisis in urna vel, ultricies imperdiet ligula. Suspendisse potenti. Vivamus feugiat risus a nisi varius, in condimentum erat hendrerit. Quisque in ante sollicitudin eros ultricies posuere vel a eros. Praesent id lorem eu orci molestie varius. Sed quis semper ante. Ut iaculis non massa a mollis. Aliquam egestas eros enim, vitae pretium felis euismod a. Duis congue a sapien at pharetra. Maecenas efficitur in enim fringilla porta. Morbi sagittis quam eget purus iaculis condimentum. Ut ac sodales felis.', id_sender: 154},
                {id: 4, message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id orci in ligula feugiat condimentum id nec nibh. Curabitur vehicula pretium tortor quis aliquam. Etiam sed tellus pharetra, mattis mauris et, vestibulum erat. Curabitur euismod, tellus sed iaculis egestas, quam erat vestibulum turpis, laoreet egestas magna enim non turpis. Proin sapien lectus, facilisis in urna vel, ultricies imperdiet ligula. Suspendisse potenti. Vivamus feugiat risus a nisi varius, in condimentum erat hendrerit. Quisque in ante sollicitudin eros ultricies posuere vel a eros. Praesent id lorem eu orci molestie varius. Sed quis semper ante. Ut iaculis non massa a mollis. Aliquam egestas eros enim, vitae pretium felis euismod a. Duis congue a sapien at pharetra. Maecenas efficitur in enim fringilla porta. Morbi sagittis quam eget purus iaculis condimentum. Ut ac sodales felis.', id_sender: 154},
            ]
      },
      {
        id: 243,
        name: "Alisa",
        messages: [
            { id: 0, message: 'Cześć!', id_sender: 154 },
            { id: 1, message: 'Pa', id_sender: 463 },
            { id: 2, message: 'Co u Ciebie?', id_sender: 154 },
            { id: 3, message: 'BlaBlaBla', id_sender: 154 },
            { id: 4, message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id orci in ligula feugiat condimentum id nec nibh. Curabitur vehicula pretium tortor quis aliquam. Etiam sed tellus pharetra, mattis mauris et, vestibulum erat. Curabitur euismod, tellus sed iaculis egestas, quam erat vestibulum turpis, laoreet egestas magna enim non turpis. Proin sapien lectus, facilisis in urna vel, ultricies imperdiet ligula. Suspendisse potenti. Vivamus feugiat risus a nisi varius, in condimentum erat hendrerit. Quisque in ante sollicitudin eros ultricies posuere vel a eros. Praesent id lorem eu orci molestie varius. Sed quis semper ante. Ut iaculis non massa a mollis. Aliquam egestas eros enim, vitae pretium felis euismod a. Duis congue a sapien at pharetra. Maecenas efficitur in enim fringilla porta. Morbi sagittis quam eget purus iaculis condimentum. Ut ac sodales felis.', id_sender: 154 },
        ]
      },
      {
        id: 834,
        name: "Wiktor",
        messages: [
            { id: 0, message: 'Cześć!', id_sender: 154 },
            { id: 1, message: 'No Hej', id_sender: 463 },
            { id: 2, message: 'Co u Ciebie?', id_sender: 154 },
            { id: 3, message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id orci in ligula feugiat condimentum id nec nibh. Curabitur vehicula pretium tortor quis aliquam. Etiam sed tellus pharetra, mattis mauris et, vestibulum erat. Curabitur euismod, tellus sed iaculis egestas, quam erat vestibulum turpis, laoreet egestas magna enim non turpis. Proin sapien lectus, facilisis in urna vel, ultricies imperdiet ligula. Suspendisse potenti. Vivamus feugiat risus a nisi varius, in condimentum erat hendrerit. Quisque in ante sollicitudin eros ultricies posuere vel a eros. Praesent id lorem eu orci molestie varius. Sed quis semper ante. Ut iaculis non massa a mollis. Aliquam egestas eros enim, vitae pretium felis euismod a. Duis congue a sapien at pharetra. Maecenas efficitur in enim fringilla porta. Morbi sagittis quam eget purus iaculis condimentum. Ut ac sodales felis.', id_sender: 154 },
            { id: 4, message: 'Lorem ipsum dolor sit amet', id_sender: 154 },
        ]
      },
      {
        id: 153,
        name: "Julia",
        messages: [
            { id: 0, message: 'Cześć!', id_sender: 154 },
            { id: 1, message: 'Hej', id_sender: 463 },
            { id: 2, message: 'Co u Ciebie?', id_sender: 154 },
            { id: 3, message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id orci in ligula feugiat condimentum id nec nibh. Curabitur vehicula pretium tortor quis aliquam. Etiam sed tellus pharetra, mattis mauris et, vestibulum erat. Curabitur euismod, tellus sed iaculis egestas, quam erat vestibulum turpis, laoreet egestas magna enim non turpis. Proin sapien lectus, facilisis in urna vel, ultricies imperdiet ligula. Suspendisse potenti. Vivamus feugiat risus a nisi varius, in condimentum erat hendrerit. Quisque in ante sollicitudin eros ultricies posuere vel a eros. Praesent id lorem eu orci molestie varius. Sed quis semper ante. Ut iaculis non massa a mollis. Aliquam egestas eros enim, vitae pretium felis euismod a. Duis congue a sapien at pharetra. Maecenas efficitur in enim fringilla porta. Morbi sagittis quam eget purus iaculis condimentum. Ut ac sodales felis.', id_sender: 154 },
            { id: 4, message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id orci in ligula feugiat condimentum id nec nibh. Curabitur vehicula pretium tortor quis aliquam. Etiam sed tellus pharetra, mattis mauris et, vestibulum erat. Curabitur euismod, tellus sed iaculis egestas, quam erat vestibulum turpis, laoreet egestas magna enim non turpis. Proin sapien lectus, facilisis in urna vel, ultricies imperdiet ligula. Suspendisse potenti. Vivamus feugiat risus a nisi varius, in condimentum erat hendrerit. Quisque in ante sollicitudin eros ultricies posuere vel a eros. Praesent id lorem eu orci molestie varius. Sed quis semper ante. Ut iaculis non massa a mollis. Aliquam egestas eros enim, vitae pretium felis euismod a. Duis congue a sapien at pharetra. Maecenas efficitur in enim fringilla porta. Morbi sagittis quam eget purus iaculis condimentum. Ut ac sodales felis.', id_sender: 154 },
        ]
      },
      {
        id: 152,
        name: "Best Friend",
        messages: [
            { id: 0, message: 'Cześć!', id_sender: 154 },
            { id: 1, message: 'Hej', id_sender: 463 },
            { id: 2, message: 'Co u Ciebie?', id_sender: 154 },
            { id: 3, message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id orci in ligula feugiat condimentum id nec nibh. Curabitur vehicula pretium tortor quis aliquam. Etiam sed tellus pharetra, mattis mauris et, vestibulum erat. Curabitur euismod, tellus sed iaculis egestas, quam erat vestibulum turpis, laoreet egestas magna enim non turpis. Proin sapien lectus, facilisis in urna vel, ultricies imperdiet ligula. Suspendisse potenti. Vivamus feugiat risus a nisi varius, in condimentum erat hendrerit. Quisque in ante sollicitudin eros ultricies posuere vel a eros. Praesent id lorem eu orci molestie varius. Sed quis semper ante. Ut iaculis non massa a mollis. Aliquam egestas eros enim, vitae pretium felis euismod a. Duis congue a sapien at pharetra. Maecenas efficitur in enim fringilla porta. Morbi sagittis quam eget purus iaculis condimentum. Ut ac sodales felis.', id_sender: 154 },
            { id: 4, message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id orci in ligula feugiat condimentum id nec nibh. Curabitur vehicula pretium tortor quis aliquam. Etiam sed tellus pharetra, mattis mauris et, vestibulum erat. Curabitur euismod, tellus sed iaculis egestas, quam erat vestibulum turpis, laoreet egestas magna enim non turpis. Proin sapien lectus, facilisis in urna vel, ultricies imperdiet ligula. Suspendisse potenti. Vivamus feugiat risus a nisi varius, in condimentum erat hendrerit. Quisque in ante sollicitudin eros ultricies posuere vel a eros. Praesent id lorem eu orci molestie varius. Sed quis semper ante. Ut iaculis non massa a mollis. Aliquam egestas eros enim, vitae pretium felis euismod a. Duis congue a sapien at pharetra. Maecenas efficitur in enim fringilla porta. Morbi sagittis quam eget purus iaculis condimentum. Ut ac sodales felis.', id_sender: 154 },
        ]
      }
    ];     
};*/


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignIn: false,
      token: "",
      userId: "",
      tokenExpiration: ""
      //conversations: loadConversations() //commented because of gql reading converstions
    };
    //methods binding
    this.changeAutorizationStatus = this.changeAutorizationStatus.bind(this);
    //this.getMessagesForConversation = this.getMessagesForConversation.bind(this);
    //this.getChatName = this.getChatName.bind(this);
  }

  changeToken = value => {
    this.setState(prevState => {
        return { token: value };
    });
  };

  changeUserId = value => {
    this.setState(prevState => {
        return { userId: value };
    });
  };

    changeTokenExpiration = value => {
    this.setState(prevState => {
        return { tokenExpiration: value };
    });
  };

  changeAutorizationStatus = () => {
    this.setState(prevState => {
      return { isSignIn: !prevState.isSignIn };
    });
    console.log(this.state.isSignIn);
  };

  /*getMessagesForConversation = (id) => {
        for (let i = 0; i < this.state.conversations.length; i++) {
            if (this.state.conversations[i].id == id)
                return this.state.conversations[i].messages;
        }
    };*/

  /*getChatName = (id)=>{
        for (let i = 0; i < this.state.conversations.length; i++) {
            if (this.state.conversations[i].id == id)
                return this.state.conversations[i].name;
        }
    };*/

  render() {
    return (
      <BrowserRouter style={{ height: "100%" }}>
        <div style={{ height: "100%" }}>
          <Navigation autorizationStatus={this.state.isSignIn} />
          <Switch className="bg-dark" style={{ height: "100%" }}>
            <Route
              path="/"
              render={() =>
                this.state.isSignIn ? (
                  <MainPage isSignIn={this.state.isSignIn} />
                ) : (
                  <Redirect to="/login" />
                )
              }
              exact
            />
            <Route
              path="/logout"
              render={() => (
                <LogoutPage
                  changeAutorizationStatus={this.changeAutorizationStatus}
                />
              )}
              exact
            />
            <Route
              path="/login"
              render={() =>
                !this.state.isSignIn ? (
                  <LoginPage
                    changeToken={this.changeToken}
                    changeUserId={this.changeUserId}
                    changeTokenExpiration={this.changeTokenExpiration}
                    changeAutorizationStatus={this.changeAutorizationStatus}
                    isSignIn={this.state.isSignIn}
                  />
                ) : (
                  <Redirect to="/" />
                )
              }
              exact
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

//Previous version from switch
/*<Route path="/"
    render={() => <MainPage onConvarsationChange={this.getMessagesForConversation}
        getChatName={this.getChatName}
        actualConversationID={this.state.conversations[0].id} />} exact />  */ 
        
export default App;
