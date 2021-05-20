import React from 'react';
// Client submits LinkedIn Profile --> fetch request from the React server to the Express server --> LinkedIn router handles the request and redirects to LinkedIn Auth page --> Client signs in and authorizes the use of her data --> redirect the client back to 
class Response extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const redirectLink = 'https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=783r30tcqzt68i&redirect_uri=http://localhost:8080/src/&scope=r_liteprofile';

    fetch('/api', {
      method: 'GET',
      mode:'no-cors',
      // redirect: 'follow',
      url: redirectLink
      // response_type: 'code',
      // client_id: '783r30tcqzt68i',
      // redirect_uri: 'http://localhost:8080/src/',
      // scope: 'r_liteprofile'
      // headers: {
      //   'Access-Control-Allow-Origin': true
      // }
    })
    .then(res => { console.log('response received ', res.json()); })
    .then(fetch('https://api.linkedin.com/v2/me', {
      method: 'GET',
      mode:'no-cors',
    }))
    .then(res => console.log('retrieving member profile', res))
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