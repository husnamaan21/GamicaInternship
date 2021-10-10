import React from 'react'




import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

export default function SimplePaper({data,update,cases}) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 250,
          height: 148,
          borderBottom:'5px solid red'
        },
      }}
    > <Paper elevation={3} >
         <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {cases}
         
        </Typography>
       
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {data}
          
        </Typography>
        <Typography variant="body2">
        {update}
          <br />
       
        </Typography>
      </CardContent>
     
     </Paper>
    </Box>
  );
}