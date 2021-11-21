import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { red } from '@mui/material/colors';
import Comments from '../../components/Comments/Comments';
import AddNewComment from '../../components/Comments/AddNewComment';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchComments } from '../../actions';
import './Post.scss';
import { useFetching } from '../../hooks/usePostFetch';
import { fetchPost as fetchPostApi } from '../../apis';
import Loader from '../../components/UI/Loader/Loader';

function Post() {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const [post, setPost] = useState({});
  const [fetchPost, isPostLoading] = useFetching(async () => {
    const fetchedPost = await fetchPostApi(id);
    setPost(fetchedPost);
  });

  useEffect(() => {
    dispatch(fetchComments(id));
    fetchPost(id);
  }, [id]);

  const handleBackButton = () => {
    history.goBack();
  };

  if (isPostLoading) {
    return <Loader />;
  }

  return (
    <>
      <Button
        variant="outlined"
        startIcon={<ArrowBackIosNewIcon />}
        onClick={handleBackButton}
      >
        Back
      </Button>
      <div className="post-wrapper">
        <Card
          sx={{
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
          <div className="post-info">
            <CardMedia
              component="img"
              image={post.display_src}
              alt="Paella dish"
              sx={{ width: '400px' }}
            />
            <div className="post-comments">
              <div className="comments">
                <Comments selectedPost={post} />
              </div>
              <div>
                <AddNewComment selectedPost={post} />
              </div>
            </div>
          </div>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {post.caption}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default Post;
