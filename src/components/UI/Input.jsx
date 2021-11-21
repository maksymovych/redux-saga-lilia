import React, { forwardRef } from 'react';
import TextField from '@mui/material/TextField';

export const Input = forwardRef((props, ref) => (
  <TextField margin="normal" inputRef={ref} {...props} />
));
