import React from 'react'
import { useState } from 'react';
import Header from './header'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend,} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
const Semicircl = () => {
  const [formData, setFormData] = useState(() => {
    const storedData = localStorage.getItem('formData')
    return storedData ? JSON.parse(storedData) : []
  })



  const category = [];
  let sold = 0 ;
  const actuel = [];
  const depence = [];
  const revenus = [];
  
  formData.map((data) => {
    category.push(data.category);
    if(data.type === 'depenses'){
      sold-=parseInt(data.amount)
      depence.push(data.amount);
      revenus.push(0);
      actuel.push(sold);
    }
    else{
      sold+=parseInt(data.amount)
      revenus.push(data.amount);
      depence.push(0);
      actuel.push(sold);
      
  }
  });

  return (
    <>
    <React.Fragment>
    <Header /> 
    <div className=' container'>
    <Line
    data={{
        labels: category,
        datasets: [
          {
            label: 'depence ',
            data: depence,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'actuel',
            data: actuel,
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
          {
            label: 'revenus',
            data: revenus,
            borderColor: 'rgb(0, 255, 0)',
            backgroundColor: 'rgba(0, 255, 0, 0.5)',
          },
        ],
      }}


      options={{
          responsive: true,
          plugins: {
            legend: {
             display : true ,
             position : "right" ,
            },
            title: {
              display: true,
              text: 'Line Chart pour gestion de votre sold',
              font:{size:25},
            },
          },

          scales:{
            x:{
              grid:{
                display: true,
              },
              title:{
                display: true ,
                text:"votre sold par categories",
                font:{size:25},
              }
            },
            y:{
              grid:{
                display: true,
              },
              title:{
                display: true ,
                text:"votre utilisation de sold ",
                font:{size:25},
              }
            },
          }
        }}
    />
    </div>
    </React.Fragment>
    </>
  )
}

export default Semicircl