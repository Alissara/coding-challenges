import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  handleInput(event) {
    this.setState({inputVal: event.currentTarget.value});
  }

  fetchData() {
    
  }

  render() {
    return (
      <div>
        <h1>Recent Reddit</h1>
        <input
          onChange={this.handleInput}
          value={this.state.inputVal}
          placeholder="Username" />
        <button onClick={this.fetchData}>
          Enter
        </button>
      </div>
    );
  }
}

export default App;
