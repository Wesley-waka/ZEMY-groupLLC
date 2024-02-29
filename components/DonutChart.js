'use client'
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';


const centerTextPlugin = {
  id: 'centerTextPlugin',
  beforeDraw: (chart) => {
    const width = chart.width,
          height = chart.height,
          ctx = chart.ctx;

    ctx.restore();
    // let fontSize = (height / 114).toFixed(2);
    // ctx.font = fontSize + "em sans-serif";
    // ctx.textBaseline = "middle";
    // Set a fixed small font size
    ctx.font = "bold 13px sans-serif"; // You can go smaller if needed, e.g., "6px sans-serif"
    ctx.textBaseline = "middle";
    ctx.textAlign = "center"; // Centers the text horizontally
    ctx.fillStyle = "#800020";
    // Centers the text horizontally

    const text = "ZEMY GROUP LLC",
          textX = width / 2,
          textY = height / 2;




    ctx.fillText(text, textX, textY);
    ctx.save();
  }
};

const data = {
  labels: ['ZEMY Group Global Ltd:', 'Subsidiary 2', 'Subsidiary 3','Subsidiary 4','Subsidiary 5','Subsidiary 6','Subsidiary 7'], // Add all subsidiary names here
  description:['From the heart of Africa to your home, ZEMY Group Global Ltd is dedicated to crafting 100% organic pet treats.','From the heart of Africa to your home, ZEMY Group Global Ltd is dedicated to crafting 100% organic pet treats.','From the heart of Africa to your home, ZEMY Group Global Ltd is dedicated to crafting 100% organic pet treats.'],
  datasets: [
    {
      label: 'Subsidiaries',
      data: [200, 50, 100,60,60,70,50], // Add respective data points here
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(255, 205, 86)',
        'rgb(255, 205, 86)',
        'rgb(255, 205, 86)'

        // Add more colors for each subsidiary
      ],
      hoverOffset: 4
    },
  ],
};

const options = {
  plugins: {
    tooltip: {
      enabled: true,
      callbacks: {
        title: function(tooltipItem) {
          // Return the title for the tooltip
          console.log(tooltipItem[0].dataIndex)
          console.log()
          return data.labels[tooltipItem[0].dataIndex];
        },
        label: function(tooltipItem) {
          // This would be the brief description you want to show
          let description = ['From the heart of Africa to your home, ZEMY Group Global Ltd is dedicated to crafting 100% organic pet treats.','From the heart of Africa to your home, ZEMY Group Global Ltd is dedicated to crafting 100% organic pet treats.','From the heart of Africa to your home, ZEMY Group Global Ltd is dedicated to crafting 100% organic pet treats.']; // Fetch the correct description based on dataIndex
          // console.log(tooltipItem[0].dataIndex)
          return description[0];
        }
      }
    },
    legend: {
      display: false, // Optional: hide the legend if you want to display it elsewhere
    }
  },
  // This will maintain the aspect ratio of your chart and might need to be adjusted based on your design requirements.
  maintainAspectRatio: false
};

const DonutChart = () => (
  <div className="h-64 w-full">
    <Doughnut data={data} options={options} plugins={[centerTextPlugin]}/>
  </div>
);

export default DonutChart;
