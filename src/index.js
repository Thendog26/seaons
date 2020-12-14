import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  state = { lat: null, long: null, errorMessage: ''};

  // Initial data loading!
  componentDidMount() {
    // Gets geolocation on initialisation
    window.navigator.geolocation.getCurrentPosition(
      // A callback to position (Doesn't run until position is called)
      position => {
        // How u normally set state
        this.setState({lat: position.coords.latitude});
        this.setState({long: position.coords.longitude});
      },
      err => this.setState({errorMessage: err.message})
    ); 
  }
  
  renderContent() {
    if(this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }
    else if(!this.state.errorMessage && this.state.lat) {
      return (
      <div>
        <SeasonDisplay lat={this.state.lat} />
      </div> 
      );
    }
    else {
      return <Spinner message="Please accept location request..."/>;
    }
  }

  render() {
    return (
    <div className="border red">
      {this.renderContent()}
    </div>
    );
  };
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);