import React from 'react';
import { Line } from 'react-chartjs-2';

export default function Chart({confirm,death}) {
    const data = {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [
            {
                label: 'Confirm cases',
                data: [confirm],
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
            },
            {
                label: 'death cases',
                data: [death],
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
            },
        ],
    };
   
    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };
    return(
        <>
        <div className='header'>
           
        </div>
        <Line data={data} options={options} />
    </>

    )
}