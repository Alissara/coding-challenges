import React from 'react';
import axios from 'axios';
import Posts from './posts';
import Comments from './comments';

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
        const posts = res.data.data.children.map(obj => obj.data);
        posts.sort((a, b) => {
          return b.score - a.score;
        });
        this.setState({ posts });
      });
    axios.get(`https://www.reddit.com/user/${this.state.username}/comments.json`)
      .then(res => {
        const comments = res.data.data.children.map(obj => obj.data);
        comments.sort((a, b) => {
          return b.score - a.score;
        });
        this.setState({ comments });
      });
  }

  render() {
    const { posts, comments } = this.state;

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

        <section>
          <Posts posts={posts} />
          <Comments comments={comments}/>
        </section>

      </div>
    );
  }
}

export default App;
