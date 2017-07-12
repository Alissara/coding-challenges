import React from 'react';

class Posts extends React.Component {
  render() {
    return (
      <div className="post-list">
        <h3>Posts</h3>
        <ul>
          {this.props.posts.map(post => (
            <PostItem
              key={post.id}
              post={post} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Posts;
