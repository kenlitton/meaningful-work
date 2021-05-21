import React from 'react';

// Client pastes LinkedIn Profile and clicks Submit --> fetch request from the React server to the Express server --> Express handles the request and redirects to LinkedIn Auth page --> Client signs in and authorizes the use of her data --> redirect the client back to landing page
class Response extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const redirectLink = 'https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=783r30tcqzt68i&redirect_uri=http://localhost:8080/src/&scope=r_liteprofile';

    fetch('/api', {
      method: 'GET',
      mode:'no-cors',
      // headers: {
      //   // 'Content-Type': 'text/html',
      //   'Access-Control-Allow-Origin' : "*",
      //   'Access-Control-Allow-Credentials' : true
      // },
      // body: 
    })
    .then(res => console.log('retrieving member profile', res))
    .then(
    (req, res) => {
      console.log('fetch auth code');
      fetch('https://api.linkedin.com/v2/me');
    })
    .catch(err => console.log(err));
    // .then(res => {
    //   this.setState({
    //   })
    // })
  }
  
  render() {
    return (
      <div>
        <h5>Results for {this.props.name}</h5>
        <button>Click me to see details</button>
      </div>
    );
  }
}

export default Response;