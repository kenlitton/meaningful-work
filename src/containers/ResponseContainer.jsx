import React from 'react';
import Response from '../components/Response.jsx';

class ResponseContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   console.log('Mounting Response Container', this.props.responses);
  // }

  // componentDidUpdate() {
  //   console.log('Updating State', this.props.responses);
  // }

  render() {
    const renderedResponses = [];
    for (let i = 0; i < this.props.responses.length; i++) {
      renderedResponses.push(
        <Response 
          name={this.props.responses[i]}
          key={i}
        />);
    }
    return (
      <div>
        <h3>See what responses others have gotten</h3>
        {renderedResponses}
      </div>
    );
  }
}

export default ResponseContainer;