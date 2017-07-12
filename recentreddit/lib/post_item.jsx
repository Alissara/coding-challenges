import React from 'react';

class PostItem extends React.Component {
  render() {
    const { title, score, url } = this.props.post;

    return (
      <li>
        <p>{score}: <a href={`${url}`}>{title}</a></p>
      </li>
    );
  }
}

export default PostItem;
