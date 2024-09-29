
   import React from 'react';
   import { Bar } from 'react-chartjs-2';
   import { Chart, registerables } from 'chart.js';

   
   Chart.register(...registerables);

   const PlayerStatsChart = React.memo(({ stats1, stats2 }) => {
       const data = {
           labels: ['Runs', 'Wickets', 'Matches'],
           datasets: [
               {
                   label: 'Player 1',
                   data: [stats1.runs || 0, stats1.wickets || 0, stats1.matches || 0],
                   backgroundColor: 'rgba(75,192,192,1)',
               },
               {
                   label: 'Player 2',
                   data: [stats2.runs || 0, stats2.wickets || 0, stats2.matches || 0],
                   backgroundColor: 'rgba(255,99,132,1)',
               },
           ],
       };

       return <Bar data={data} />;
   });

   export default PlayerStatsChart;