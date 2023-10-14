import React from 'react';
import ReactApexChart from 'react-apexcharts';

const DonutChart: React.FC = () => {
  const chartOptions: ApexCharts.ApexOptions = {
    chart: {
      type: 'donut',
    },
    labels: ['Today', 'Yesterday', '18/09/2023', '17/09/2023'], // Replace with your labels
    series: [45, 55, 70, 43], // Replace with your data series
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    }
  };

  return (
    <div className="donut-chart">
      <ReactApexChart options={chartOptions} series={chartOptions.series} type="donut" height={"100%"} />
    </div>
  );
};

export default DonutChart;
