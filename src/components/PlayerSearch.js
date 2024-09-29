
   import React, { useState } from 'react';
   import { TextField, Button } from '@mui/material';

   const PlayerSearch = ({ onSearch }) => {
       const [playerName, setPlayerName] = useState('');

       const handleSearch = () => {
          
           onSearch(playerName);
       };

       return (
           <div>
               <TextField
                   label="Search Player"
                   value={playerName}
                   onChange={(e) => setPlayerName(e.target.value)}
               />
               <Button onClick={handleSearch}>Search</Button>
           </div>
       );
   };

   export default PlayerSearch;