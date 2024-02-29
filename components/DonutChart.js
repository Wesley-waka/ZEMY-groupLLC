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
  labels: ['Medlink World LLC',
  'Medlink LLC USA',
  'JUST ASK LLC',
   'KSK International LLC',
   'Mysha Khan LLC',
   'Zeake Khan LLC', 
   'Sierra Global Health LLC',
   'ZEMY Group Global LTD'
  ], // Add all subsidiary names here
  datasets: [
    {
      label: 'Subsidiaries',
      data: [100, 50, 60,40,40,40,40,20], // Add respective data points here
      backgroundColor: [
        'rgb(255, 99, 132)',
        '#87CEEB',
        '#D2B48C',
        '#5A3A22',
        '#800080',
        '#D3D3D3',
        '#000080',
        '#A7A938',

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
          // You'll assign each description to the respective data index
          const descriptions = [
            'A healthcare and CRO consulting firm which champions itself in clinical data  generation for medical devices that needs FDA registration.',
            'A multinational healthcare consultancy firm dedicated to the management of profitable health services through the use of innovative human and technological resources,',
            'Just ASK deals with consulting services in health foods and Aviation.',
            'A leading supplier of high quality home and office furniture in USA , we are a pioneer in the industry',
            'A company dedicated to residential purchase and management of rental properties.',
            'A company completely dedicated to purchase and management of commercial Real Estate in NY tri state area.',
            'A company dedicated to production of CDMO, in generic pharma space.',
            'A company dedicated to manufacturing of 100% organic pet treat from Africa.'
          ];
          return descriptions[tooltipItem.dataIndex] || '';
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
  <div className="h-72 w-full py-4 my-8">
      <h2 className="text-center  mx-auto  font-semibold ">Company OverView</h2>

    <Doughnut data={data} options={options} plugins={[centerTextPlugin]}/>
  </div>
);

export default DonutChart;
