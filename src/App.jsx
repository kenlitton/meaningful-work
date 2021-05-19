import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Motivated Individuals</h1>
      </div>
      // <section>
      //   <ResponseContainer name='Motivated Individual' />
      // </section>
    );
  }
}

class ResponseContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      responsesArr : [],
    }
  }

  render() {
    return (
      <div>
        <h3>See what responses others have gotten</h3>
        <Response name={this.props.name}/>
      </div>
    );
  }
}

class Response extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <h5>Placeholder for {this.props.name}</h5>
        <button>Click me to see details</button>
      </div>
    );
  }
}

export default App;