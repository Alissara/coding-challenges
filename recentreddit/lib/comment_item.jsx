import React from 'react';

class CommentItem extends React.Component {
  render() {
    const { body, score, link_title, link_permalink } = this.props.comment;

    return (
      <li>
        <a href={`${link_permalink}`}>{link_title}</a>
        <p>{score}: {body}</p>
      </li>
    );
  }
}

export default CommentItem;
