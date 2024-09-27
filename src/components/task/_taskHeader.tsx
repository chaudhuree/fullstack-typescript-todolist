import { Box, Chip, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';

import { ITaskHeader } from './interfaces/ITaskHeader.ts';
import PropTypes from 'prop-types';
import dayjs ,{Dayjs}from 'dayjs';
export const TaskHeader: FC<ITaskHeader> = (
  props,
): ReactElement => {
  // Destructure props
  const { 
    title = 'Default Title', 
    date =  dayjs(new Date()),

   } =
    props;

  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="space-between"
      mb={4}
    >
      <Box>
        <Typography variant="h6">{title}</Typography>
      </Box>
      <Box>
        <Chip
          variant="outlined"
          label={date.format('MMMM D, YYYY')}
        />
      </Box>
    </Box>
  );
};

TaskHeader.propTypes = {
  title: PropTypes.string,
  date: PropTypes.instanceOf(Dayjs),
};
