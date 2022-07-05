import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';

// import chessPlayers from './chessPlayer';
import AddchessPlayerForm from './AddchessPlayerForm';

// const { default: axios } = require("axios");

function App() {
    const [chessPlayers, setchessPlayers] = useState([]);

    useEffect(() => {
        axios.get('/recycledItems')
          .then(res => setchessPlayers(res.data))
          .catch(err => console.log(err))
    }, []);

    // const recycledItemsList = recycledItems.map(recycledItem => <recycledItem {...recycledItem} key={recycledItem.name}/>)

    const getchessPlayers = () => {
        axios.get('/chessPlayers')
          .then(res => setchessPlayers(res.data))
          .catch(err => console.log(err))
    };

    const addchessPlayer = (newchessPlayer) => {
        axios.post('/chessPlayers', newchessPlayer)
          .then(res => {
            setchessPlayers(prevchessPlayers => [...prevchessPlayers, res.data])
        })
        .catch(err => console(err))
    };

    const deletechessPlayer = (chessPlayerId) => {
        axios.delete(`/chessPlayers/${chessPlayerId}`)
          .then(res => {
              setchessPlayers(prevchessPlayers => prevchessPlayers.filter(chessPlayer => chessPlayer._id !== chessPlayerId))
        })
        .catch(err => console.log(err))
    }
    const editchessPlayer = (updates, chessPlayerId) => {
        axios.put(`/chessPlayers/$(chessPlayerId)`, updates)
        .then(res => {
            setchessPlayers(prevchessPlayers => prevchessPlayers.map(chessPlayer => chessPlayer._id !== chessPlayerId ? chessPlayer : res.data))
        })
        .catch(err => console.log(err))
    }
    useEffect(() => {
        getchessPlayers();
    }, []);

    const chessPlayersList = chessPlayers.map(chessPlayer => 
        <chessPlayer
            {...chessPlayer} 
            deletechessPlayers={deletechessPlayer}
            editchessPlayers={editchessPlayer}
            key={chessPlayer.title} />)

    return (
        <div className = 'chessPlayers-container'>
            <AddchessPlayerForm
            btnText='Add Chess Players'
            submit={addchessPlayer} />
            {chessPlayersList}
            </div>
    );
}

export default App;