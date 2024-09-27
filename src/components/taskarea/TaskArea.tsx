import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import React, { FC, ReactElement } from 'react';
import { TaskCounter } from '../taskCounter/TaskCounter';
import {Status} from '../createTaskForm/enums/Status';
import { format } from 'date-fns';
import { Task } from '../task/Task';

 const TaskArea: FC = (): ReactElement => {
  return (
    <Grid item md={8} xs={12}  px={4}>
      <Box mb={8} px={4}>
        <h2>
          Status Of Your Tasks As On{' '}
          {format(new Date(), 'PPPP')}
        </h2>
      </Box>
      <Grid
        container
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Box>
        <Grid
          item
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
          md={10}
          xs={12}
          mb={8}
        >
          <TaskCounter status={Status.todo} count={10} />
          <TaskCounter status={Status.inProgress} count={12} />
          <TaskCounter status={Status.completed} count={9} />
        </Grid>
        </Box>
        <Grid
          item
          display="flex"
          flexDirection="column"
          xs={10}
          md={8}
        >
         <Task />
         <Task />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TaskArea;