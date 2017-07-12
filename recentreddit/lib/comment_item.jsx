import React from 'react';

class CommentItem extends React.Component {
  render() {
    const { body, score, link_title, link_permalink } = this.props.comment;

    return (
      <li>
        {score}: {body}
      </li>
    );
  }
}

export default CommentItem;
