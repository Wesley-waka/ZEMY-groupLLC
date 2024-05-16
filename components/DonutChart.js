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

    ctx.font = "bold 11px sans-serif"; // You can go smaller if needed, e.g., "6px sans-serif"
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

          return data.labels[tooltipItem[0].dataIndex];
        },
        label: function(tooltipItem) {

          const descriptions = [
            'A healthcare and CRO consulting firm   ',
            'A multinational healthcare consultancy firm ',
            'Just ASK deals with consulting services in health foods and Aviation.',
            'A leading supplier of quality home and office furniture in USA ',
            'A company dedicated to purchase of rental properties.',
            'A company completely dedicated to Real Estate in NY .',
            'A company dedicated to production of generic pharma space.',
            'A manufacturing company organic pet treat from Africa.'
          ];
          return descriptions[tooltipItem.dataIndex] || '';
        }
      }
    },
    legend: {
      display: true, 
    }
  },
  maintainAspectRatio: false
};

const DonutChart = () => (
  <div className="max-h-72 w-full py-4 my-8">
      {/* <div> */}
        <h2 className="text-center  mx-auto  font-semibold">Company OverView</h2>
        <Doughnut data={data} options={options} />
      {/* </div> */}
  </div>
);

export default DonutChart;
