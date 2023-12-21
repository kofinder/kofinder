import React, { ChangeEventHandler, useState } from 'react';

import { format, isAfter, isBefore, isValid, parse, endOfDay } from 'date-fns';
import {
  DateRange,
  DayPicker,
  SelectRangeEventHandler
} from 'react-day-picker';
import { Box, Popover, TextField, Grid, Button } from '@mui/material';
import "react-day-picker/dist/style.css"

type IParams = {
  className?: string;
  onSearch:(from: Date , to: Date ) => void;
  loadingSearch?: boolean;
  handleReset:() => void;
}

const DateRagePicker = (props: IParams) => {
  const { onSearch, className, handleReset, ...rest} = props
  const [showCalender, setShowCalender] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const [selectedRange, setSelectedRange] = useState<DateRange>();
  const [fromValue, setFromValue] = useState<string>('');
  const [toValue, setToValue] = useState<string>('');

  const handleCalenderShow = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setShowCalender(!showCalender)
  }

  const handleCalenderClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

  const handleFromChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setFromValue(e.target.value);
    const date = parse(e.target.value, 'dd-MM-y', new Date());
    if (!isValid(date)) {
      return setSelectedRange({ from: undefined, to: undefined });
    }
    if (selectedRange?.to && isAfter(date, selectedRange.to)) {
      setSelectedRange({ from: selectedRange.to, to: date });
    } else {
      setSelectedRange({ from: date, to: selectedRange?.to });
    }
  };

  const handleToChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setToValue(e.target.value);
    const date = parse(e.target.value, 'dd-MM-y', new Date());

    if (!isValid(date)) {
      return setSelectedRange({ from: selectedRange?.from, to: undefined });
    }
    if (selectedRange?.from && isBefore(date, selectedRange.from)) {
      setSelectedRange({ from: date, to: selectedRange.from });
    } else {
      setSelectedRange({ from: selectedRange?.from, to: date });
    }
  };

  const handleRangeSelect: SelectRangeEventHandler = (range: DateRange | undefined) => {
    setSelectedRange(range);
    if (range?.from) {
      setFromValue(format(range.from, 'dd-MM-y'));
    } else {
      setFromValue('');
    }
    if (range?.to) {
      setToValue(format(range.to, 'dd-MM-y'));
    } else {
      setToValue('');
    }
    onSearch(range?.from || new Date(), endOfDay(range?.to || new Date()))
  };

  return (
    <Box>
    <Grid sx={{display: 'flex', alignItems: 'center'}}>
      <TextField 
        size="small" 
        sx={{width: 145, marginRight: '5px'}} 
        onClick={handleCalenderShow} 
        aria-readonly 
        placeholder='From' 
        value={fromValue}
        onChange={handleFromChange}
        />
      <span>-</span>
      <TextField size='small' sx={{width: 145, marginLeft: '5px'}} onClick={handleCalenderShow} aria-readonly placeholder='To' value={toValue}
      onChange={handleToChange}/>
      
    </Grid>
    
        <Popover open={open} anchorEl={anchorEl} onClose={handleCalenderClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'left'}} >
          <DayPicker 
          mode='range' 
          selected={selectedRange} 
          onSelect={handleRangeSelect}
          footer={
            <Button onClick={handleReset}>Clear</Button>
          }
          />
      </Popover>
    </Box>
  )
}

export default DateRagePicker