import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import { likePost } from '../../actions';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function Post({ post, comments }) {
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <Card
      sx={{
        maxWidth: 345,
        height: 425,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <img src={post.avatar} alt="avatar"></img>
          </Avatar>
        }
        title={post.username}
        subheader={post.createdOn}
      />
      <CardMedia
        component="img"
        height="194"
        image={post.display_src}
        alt="Paella dish"
        onClick={() => history.push(`/posts/${post.id}`)}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.caption}
        </Typography>
      </CardContent>
      <CardActions
        disableSpacing
        sx={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <div>
          <IconButton
            aria-label="add to favorites"
            onClick={() => dispatch(likePost(post.id))}
          >
            <FavoriteIcon />
          </IconButton>
          <span>{post.likes}</span>
          <IconButton aria-label="comments">
            <ModeCommentIcon />
          </IconButton>
          <span>{comments[post.code] ? comments[post.code].length : 0}</span>
        </div>
      </CardActions>
    </Card>
  );
}
