import React from "react";
import ReactApexChart from "react-apexcharts";


const StackChart = (state) =>   {
      
    state = {
          
      series: [{
        name: 'series1',
        data: [51, 25, 72, 35, 70]
      }, 
      // {
      //   name: 'series2',
      //   data: [11, 32, 45, 32, 34, 52, 41]
      // }
    ],
      options: {
        chart: {
          height: 350,
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'days',
          categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },
      },
    
    
    };

  
    
      return (
        <>
            <ReactApexChart options={state.options} series={state.series} type="area" width={320} />
          </>
      );
    }
export default StackChart;