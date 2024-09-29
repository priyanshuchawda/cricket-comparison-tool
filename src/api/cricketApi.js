
   import axios from 'axios';

   const API_URL = 'https://cricketdata.org/api/v1'; 
   const API_KEY = process.env.REACT_APP_API_KEY; 

   export const fetchCountries = async () => {
       const response = await axios.get(`${API_URL}/countries?apikey=${API_KEY}&offset=0`);
       return response.data;
   };

   export const fetchAllPlayers = async () => {
       const response = await axios.get(`${API_URL}/players?apikey=${API_KEY}&offset=0`);
       return response.data;
   };

   export const fetchPlayerInfo = async (playerId) => {
       const response = await axios.get(`${API_URL}/players_info?apikey=${API_KEY}&id=${playerId}`);
       return response.data;
   };

   export const fetchSeriesList = async () => {
       const response = await axios.get(`${API_URL}/series?apikey=${API_KEY}&offset=0`);
       return response.data;
   };

   export const fetchMatchInfo = async (matchId) => {
       const response = await axios.get(`${API_URL}/match_info?apikey=${API_KEY}&id=${matchId}`);
       return response.data;
   };

   export const searchSeries = async (searchTerm) => {
       const response = await axios.get(`${API_URL}/series?apikey=${API_KEY}&search=${searchTerm}&offset=0`);
       return response.data;
   };

   export const fetchPlayerStats = async (playerId) => {
       const response = await axios.get(`${API_URL}/players_info?apikey=${API_KEY}&id=${playerId}`);
       return response.data.data; 
   };