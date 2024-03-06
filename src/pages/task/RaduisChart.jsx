import React from "react";
import ReactApexChart from "react-apexcharts";


const RaduisChart = (state) =>   {
      
    state = {
    
        series: [71],
        options: {
          chart: {
            width: 320,
            type: 'radialBar',
          },
          plotOptions: {
            radialBar: {
             
              dataLabels: {
                name: {
                  show: false,
                  color: '#fff'
                },
                value: {
                  show: true,
                  color: 'red',
                  offsetY: 10,
                  fontSize: '30px',
                  fontFamily: 'Poopins',
                  fontWeigth:'Bold'
                }
              }
            }
          },
          
          stroke: {
            lineCap: 'round'
          },
          labels: [''],
          }
        }

  
    
      return (
        <>
            <ReactApexChart options={state.options} series={state.series} type="radialBar" width={320} />
          </>
      );
    }
export default RaduisChart;