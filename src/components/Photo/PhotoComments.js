import React from 'react';

const PhotoComments = ({ comments }) => {
  console.log(comments);
  return (
    <div>
      {comments.map((comment) => {
        return <p>{comment.comment_content}</p>;
      })}
    </div>
  );
};

export default PhotoComments;
