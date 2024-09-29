
   import React, { useEffect, useState } from 'react';
   import { fetchPlayerStats } from '../api/cricketApi';
   import PlayerStatsChart from './PlayerStatsChart';
   import { Grid, Card, CardContent, Typography } from '@mui/material';

   const PlayerComparison = ({ player1, player2 }) => {
       const [stats1, setStats1] = useState(null);
       const [stats2, setStats2] = useState(null);
       const [loading, setLoading] = useState(true);

       useEffect(() => {
           const getStats = async () => {
               setLoading(true);
               try {
                   const stats1 = await fetchPlayerStats(player1);
                   const stats2 = await fetchPlayerStats(player2);
                   setStats1(stats1);
                   setStats2(stats2);
               } catch (error) {
                   console.error("Error fetching player stats:", error);
               } finally {
                   setLoading(false);
               }
           };

           getStats();
       }, [player1, player2]);

       if (loading) return <div>Loading...</div>;

       return (
           <Grid container spacing={2}>
               <Grid item xs={12} md={6}>
                   <Card>
                       <CardContent>
                           <Typography variant="h5">{stats1.name}</Typography>
                           <Typography>Runs: {stats1.runs || 0}</Typography>
                           <Typography>Wickets: {stats1.wickets || 0}</Typography>
                       </CardContent>
                   </Card>
               </Grid>
               <Grid item xs={12} md={6}>
                   <Card>
                       <CardContent>
                           <Typography variant="h5">{stats2.name}</Typography>
                           <Typography>Runs: {stats2.runs || 0}</Typography>
                           <Typography>Wickets: {stats2.wickets || 0}</Typography>
                       </CardContent>
                   </Card>
               </Grid>
               <Grid item xs={12}>
                   <PlayerStatsChart stats1={stats1} stats2={stats2} />
               </Grid>
           </Grid>
       );
   };

   export default PlayerComparison;