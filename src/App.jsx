import React from 'react';
import ResponseCreator from './components/ResponseCreator.jsx';
import ResponseContainer from './containers/ResponseContainer.jsx';
import logo from './assets/purposeful-work.png';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      responses: []
    };
    this.receiveProfile = this.receiveProfile.bind(this);
    this.sendProfile = this.sendProfile.bind(this);
  }

  receiveProfile(event) {
    // console.log(event.target.value);
    this.setState({
      url: event.target.value,
    });
  }

  sendProfile(event) {
    event.preventDefault();
    // functional set state guarantees we can have access to previous states
    this.setState((prevState) => {
      let tempResponses = [...prevState.responses];
      tempResponses.push(prevState.url);
      return ({
        // ...prevState,
        responses: tempResponses,
        url: ''
      })
    });
    console.log('Updating state ', this.state.responses);
  }

  render() {
    return (
      <div>
        <img src={logo} alt='purposeful work welcoming image'></img>
        <ResponseCreator 
          receiveProfile={this.receiveProfile} 
          sendProfile={this.sendProfile}/>
      <section>
        <ResponseContainer 
          responses={this.state.responses} />
      </section>
      </div>
    );
  }
}

export default App;