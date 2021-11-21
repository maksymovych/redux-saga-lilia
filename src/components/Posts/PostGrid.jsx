import React from 'react';
import Grid from '@mui/material/Grid';
import Post from './Post';
import Loader from '../UI/Loader/Loader';
import { useSelector } from 'react-redux';

function PostGrid() {
  const { data: posts, isFetching } = useSelector((state) => state.posts);

  if (!posts.length && isFetching) {
    return <Loader />;
  }

  return (
    <>
      <Grid container spacing={2}>
        {posts.map((post) => (
          <Grid key={post.id} item xs={6} sm={4} md={3}>
            <Post post={post} comments={[]} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default PostGrid;
