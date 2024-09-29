
import React, { useEffect, useState } from 'react';
import { fetchAllPlayers } from '../api/cricketApi';
import PlayerInput from './PlayerInput';
import PlayerComparison from './PlayerComparison';

const PlayerList = () => {
    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedPlayer1, setSelectedPlayer1] = useState(null);
    const [selectedPlayer2, setSelectedPlayer2] = useState(null);

    useEffect(() => {
        const getPlayers = async () => {
            try {
                const data = await fetchAllPlayers();
                setPlayers(data.data); 
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getPlayers();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h2>Player List</h2>
            <PlayerInput 
                players={players} 
                setPlayer1={setSelectedPlayer1} 
                setPlayer2={setSelectedPlayer2} 
            />
            {selectedPlayer1 && selectedPlayer2 && (
                <PlayerComparison player1={selectedPlayer1} player2={selectedPlayer2} />
            )}
            <ul>
                {players.map(player => (
                    <li key={player.id}>{player.name} - {player.country}</li>
                ))}
            </ul>
        </div>
    );
};

export default PlayerList;