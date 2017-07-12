import React from 'react';
import CommentItem from './comment_item';

class Comments extends React.Component {
  render() {
    return (
      <div className="comment-list">
        <h3>Comments</h3>
        <ul>
          {this.props.comments.map(comment => (
            <CommentItem
              key={comment.id}
              comment={comment} />
          ))}
        </ul>
      </div>
    );
  }

}

export default Comments;
