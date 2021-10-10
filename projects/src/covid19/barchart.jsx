import React from 'react';
import { Bar } from 'react-chartjs-2';


    function HorizontalBarChart({confirm,death,name}){
const data = {
  labels: [name],
  datasets: [
    {
      label: "Confirm",
      data: [confirm],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
      
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
      
      ],
      borderWidth: 1,
    },
    {
        label: 'death',
        data: [death],
        backgroundColor: [
      
          'rgba(54, 162, 235, 0.2)'
         
        ],
        borderColor: [
     
          'rgba(54, 162, 235, 1)'
          
        ],
        borderWidth: 1,
      }
  ],
};

const options = {
  indexAxis: 'x',
  // Elements options apply to all of the options unless overridden in a dataset
  // In this case, we are setting the border of each horizontal bar to be 2px wide
  elements: {
    bar: {
      borderWidth: 1,
      height :2,
      width:1
    },
  },
  responsive: true,
  plugins: {
    
   
    title: {
      display: true,
   
    },
  },
};
return( <>
   
     
    <Bar data={data} options={options} />
  </>)

 
}

export default HorizontalBarChart;