import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '../UI/Input';
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '../../actions';

const schema = yup.object().shape({
  comment: yup.string().required('The comment is required'),
});

function AddNewComment() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const selectedPost = useSelector((state) => state.posts.selectedPost);

  const onSubmit = (data) => {
    dispatch(addComment({ ...data, postCode: selectedPost.code }));
    reset();
  };

  return (
    <form
      noValidate
      sx={{ width: '100%', dislay: 'flex' }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        sx={{ m: '10px 0 0 15px', width: 'calc(100% - 55px)' }}
        variant="standard"
        {...register('comment')}
        id="comment"
        type="text"
        placeholder="Your comment"
        name="comment"
        error={!!errors.comment}
        helperText={errors?.comment?.message}
      />
      <IconButton type="submit" aria-label="send comment" color="primary">
        <SendIcon />
      </IconButton>
    </form>
  );
}

export default AddNewComment;
