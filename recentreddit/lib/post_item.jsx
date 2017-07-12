import React from 'react';

class PostItem extends React.Component {
  render() {
    const { title, score, url } = this.props.post;

    return (
      <li>
        {score}: {title}
      </li>
    );
  }
}

export default PostItem;
