
   import React from 'react';
   import { TextField, Button } from '@mui/material';

   const PlayerInput = ({ players, setPlayer1, setPlayer2 }) => {
       const handleCompare = () => {
           
       };

       return (
           <div>
               <TextField
                   select
                   label="Select Player 1"
                   onChange={(e) => setPlayer1(e.target.value)}
                   SelectProps={{
                       native: true,
                   }}
               >
                   <option value="">Select Player</option>
                   {players.map(player => (
                       <option key={player.id} value={player.id}>{player.name}</option>
                   ))}
               </TextField>
               <TextField
                   select
                   label="Select Player 2"
                   onChange={(e) => setPlayer2(e.target.value)}
                   SelectProps={{
                       native: true,
                   }}
               >
                   <option value="">Select Player</option>
                   {players.map(player => (
                       <option key={player.id} value={player.id}>{player.name}</option>
                   ))}
               </TextField>
               <Button onClick={handleCompare}>Compare</Button>
           </div>
       );
   };

   export default PlayerInput;