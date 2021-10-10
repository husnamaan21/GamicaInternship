import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

export default function Country({country,setName}) {
    const [countries, setcountries] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const handleChange = (event) => {
        setcountries(event.target.value);
        setName(event.target.value)
      };
      const handleClose = () => {
        setOpen(false);
      };
      const handleOpen = () => {
        setOpen(true);
      };
    return (
        <div>


        

        <Button sx={{ display: 'block', mt: 2 }} onClick={handleOpen}>
       select any country
      </Button>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 140 }}>
        <InputLabel  id="demo-simple-select-standard-label">Countries</InputLabel>
        <Select
        
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={countries}
          label="Countries"
          onChange={handleChange}
        >
            <MenuItem value="">
            <em>Global</em>
          </MenuItem>
            {country.map((i,v)=> <MenuItem value={i.name}>{i.name}</MenuItem>)}
         
        </Select>
      </FormControl>


 

 

 
           
            
        </div>
    )
}