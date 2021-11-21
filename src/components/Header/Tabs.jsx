import React from 'react';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';

function LinkTab(props) {
  return <Tab component={Link} {...props} />;
}

export default LinkTab;
