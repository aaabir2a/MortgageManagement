import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Tenure({ data, setData }) {
    const handleChange = (event) => {
        setData({ ...data, loanTerm: event.target.value });
    };
    

    console.log(data);
    
  

  return (
    <Box sx={{ maxWidth: 100 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Tenure</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={data.loanTerm}
          defaultValue={5}
          label="Tenure"
          onChange={handleChange}
        >
          <MenuItem value={5}>Five</MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={25}>Twenty Five</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
