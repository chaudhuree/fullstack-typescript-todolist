import React, { FC, ReactElement } from 'react';
import PropTypes from 'prop-types';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { IDateField } from './interfaces/IDateField';
import dayjs ,{Dayjs}from 'dayjs';
export const TaskDateField: FC<IDateField> = (
  props,
): ReactElement => {
  // props
  const {
    value = dayjs(new Date()),
    onChange = (date) => console.log(date),
    disabled = false,
  } = props;


  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
          label="Task Date"
          format="DD/MM/YYYY"
          value={value}
          onChange={(newValue) => onChange(newValue)}
          disabled={disabled}
        />
      </LocalizationProvider>
    </>
  );
};

TaskDateField.propTypes = {
  value: PropTypes.instanceOf(Dayjs),
  onChange: PropTypes.func.isRequired,            
  disabled: PropTypes.bool,            
};