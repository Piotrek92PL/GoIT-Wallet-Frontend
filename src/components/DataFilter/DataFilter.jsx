import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import style from './DataFilter.module.scss';

export default function DataFilter({ month, setMonth, year, setYear }) {
  return (
    <div className={style.DataFilter}>
      <FormControl className={style.DataFilter__form}>
        <InputLabel id="month">Month</InputLabel>
        <Select
          MenuProps={{
            PaperProps: {
              sx: {
                bgcolor: '#ffffff70',
                borderRadius: '20px',
                backdropFilter: 'blur(25px)',
                boxShadow: '0px 6px 15px rgba(0,0,0,0.1)',
                '& .MuiMenuItem-root': {
                  padding: '2px 20px',
                  '&:hover': {
                    backgroundColor: '#fff',
                  },
                  '&.Mui-selected': {
                    backgroundColor: '#fff',
                  },
                },
              },
            },
          }}
          sx={{
            borderRadius: '25px',
            pl: '6px',
            height: 50,
            '& .css-i4bv87-MuiSvgIcon-root': {
              position: 'absolute',
              right: '20px',
            },
          }}
          id="month"
          value={month}
          onChange={e => {
            setMonth(e.target.value);
          }}
          label="Month"
        >
          <MenuItem value={1}>January</MenuItem>
          <MenuItem value={2}>February</MenuItem>
          <MenuItem value={3}>March</MenuItem>
          <MenuItem value={4}>April</MenuItem>
          <MenuItem value={5}>May</MenuItem>
          <MenuItem value={6}>June</MenuItem>
          <MenuItem value={7}>July</MenuItem>
          <MenuItem value={8}>August</MenuItem>
          <MenuItem value={9}>September</MenuItem>
          <MenuItem value={10}>October</MenuItem>
          <MenuItem value={11}>November</MenuItem>
          <MenuItem value={12}>December</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={style.DataFilter__form}>
        <InputLabel id="year">Year</InputLabel>
        <Select
          MenuProps={{
            PaperProps: {
              sx: {
                bgcolor: '#ffffff70',
                borderRadius: '20px',
                backdropFilter: 'blur(25px)',
                boxShadow: '0px 6px 15px rgba(0,0,0,0.1)',
                '& .MuiMenuItem-root': {
                  padding: '2px 20px',
                  '&:checked': { backgroundColor: '#fff' },
                  '&:hover': {
                    backgroundColor: '#fff',
                  },
                  '&:active': {
                    backgroundColor: '#fff',
                  },
                  '&:focus': {
                    backgroundColor: '#fff',
                  },
                  '&.Mui-selected': {
                    backgroundColor: '#fff',
                  },
                  '&.Mui-checked': {
                    backgroundColor: '#fff',
                  },
                },
              },
            },
          }}
          sx={{
            borderRadius: '25px',
            pl: '6px',
            height: 50,
            '& .css-i4bv87-MuiSvgIcon-root': {
              position: 'absolute',
              right: '20px',
            },
          }}
          labelId=""
          id="year"
          value={year}
          onChange={e => {
            setYear(e.target.value);
          }}
          label="Year"
        >
          <MenuItem value={2013}>2013</MenuItem>
          <MenuItem value={2014}>2014</MenuItem>
          <MenuItem value={2015}>2015</MenuItem>
          <MenuItem value={2016}>2016</MenuItem>
          <MenuItem value={2017}>2017</MenuItem>
          <MenuItem value={2018}>2018</MenuItem>
          <MenuItem value={2019}>2019</MenuItem>
          <MenuItem value={2020}>2020</MenuItem>
          <MenuItem value={2021}>2021</MenuItem>
          <MenuItem value={2022}>2022</MenuItem>
          <MenuItem value={2023}>2023</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}