import React, { FC, ReactElement } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Sidebar from '../../components/sidebar/sidebar';
import TaskArea from '../../components/taskarea/TaskArea';

export const Dashboard: FC = (): ReactElement => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container minHeight="100vh" p={0} m={0}>
      <TaskArea />
      <Sidebar />
    </Grid>
    </Box>
  );
};
