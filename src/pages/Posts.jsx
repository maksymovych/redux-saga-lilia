import React, { useEffect } from 'react';
import PostGrid from '../components/Posts/PostGrid';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../actions';
import Typography from '@mui/material/Typography';

export default function Posts() {
  const dispatch = useDispatch();
  const { data: posts } = useSelector((state) => state.posts);

  useEffect(() => {
    if (!posts.length) {
      dispatch(fetchPosts());
    }
  }, [dispatch, posts.length]);

  return (
    <>
      <Typography
        variant="h1"
        component="h2"
        sx={{
          textAlign: 'center',
          fontFamily: 'Festive',
          color: 'lightBlue',
          m: '15px 0',
        }}
      >
        Reduxagram
      </Typography>
      <PostGrid />
    </>
  );
}
