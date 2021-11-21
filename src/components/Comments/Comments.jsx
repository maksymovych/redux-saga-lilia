import React, { Fragment } from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Comment from './Comment';
import { useSelector } from 'react-redux';

function Comments({ removeComment, selectedPost }) {
  const { data: comments } = useSelector((state) => state.comments);

  if (!comments.length) {
    return (
      <Typography variant="p" component="p" sx={{ fontStyle: 'italic' }}>
        Be firth who write a comment there
      </Typography>
    );
  }
  return (
    <List sx={{ width: '100%', maxWidth: 400, bgcolor: 'background.paper' }}>
      {comments.map((comment, i) => (
        <Fragment key={i}>
          <Comment
            comment={comment}
            index={i}
            removeComment={removeComment}
            selectedPost={selectedPost}
          />
          {comments.length !== i + 1 && (
            <Divider variant="inset" component="li" />
          )}
        </Fragment>
      ))}
    </List>
  );
}

Comments.defaultProps = {
  comments: [],
};

export default Comments;
