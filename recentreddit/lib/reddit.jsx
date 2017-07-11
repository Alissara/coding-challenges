import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      posts: [],
      comments: [],
    };
    this.handleInput = this.handleInput.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  handleInput(event) {
    this.setState({username: event.currentTarget.value});
  }

  fetchData() {
    axios.get(`https://www.reddit.com/user/${this.state.username}/submitted.json`)
      .then(res => {
        const posts = res.data.children.map(obj => obj.data);
        this.setState({ posts });
      });
    axios.get(`https://www.reddit.com/user/${this.state.username}/comments.json`)
      .then(res => {
        const comments = res.data.children.map(obj => obj.data);
        this.setState({ comments });
      });
  }

  render() {
    return (
      <div>
        <h1>Recent Reddit</h1>
        <input
          onChange={this.handleInput}
          value={this.state.username}
          placeholder="Username" />
        <button onClick={this.fetchData}>
          Enter
        </button>


      </div>
    );
  }
}

export default App;
