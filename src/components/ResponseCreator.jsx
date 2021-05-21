import React from 'react';

// define function to extract the client's input when typing in the input box

class ResponseCreator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <label htmlFor='linkedin-profile-input'>Please paste your LinkedIn profile here</label>
        <br></br>
        <input 
          type='text' 
          id='linkedin-profile-input' name='linkedin-profile-input'
          onChange={this.props.receiveProfile}></input>
        <input 
          type='submit' 
          id='submit' 
          value='See Similar People'
          onClick={this.props.sendProfile}></input>
          <a href='https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=783r30tcqzt68i&redirect_uri=http://localhost:8080/&scope=r_liteprofile'>CLICK ME
          </a>
      </div>
    );
  }
}

export default ResponseCreator;