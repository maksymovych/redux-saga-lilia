import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { removeComment } from '../../actions';

function Comment({ comment, index, selectedPost }) {
  const dispatch = useDispatch();
  return (
    <ListItem alignItems="flex-start" key={index}>
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src={comment.avatar} />
      </ListItemAvatar>
      <ListItemText
        sx={{
          ':hover button': {
            opacity: 1,
          },
        }}
        primary={
          <>
            <Typography
              sx={{ display: 'inline', fontWeight: 600 }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {comment.user}
            </Typography>
            <IconButton
              edge="end"
              aria-label="comments"
              sx={{ float: 'right', opacity: 0 }}
              onClick={() => dispatch(removeComment(index, selectedPost.code))}
            >
              <CloseIcon />
            </IconButton>
          </>
        }
        secondary={comment.text}
      />
    </ListItem>
  );
}

export default Comment;
