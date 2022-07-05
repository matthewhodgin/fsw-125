import { useState } from 'react';
import AddchessPlayerForm from './AddchessPlayerForm';

function ChessPlayer({ deletechessPlayer, editchessPlayer, name, country, _id }) {
    const [editToggle, setEditToggle] = useState(false)
    return (
        <div classname='chessPlayer'>
            { !editToggle ?
              <>
                <h1>Name: {name}</h1>
                <p>Country: {country}</p>
                <button 
                    onClick={() => deletechessPlayer(_id)} 
                    className='delete-btn'>
                    Delete
                </button>
                <button 
                    onClick={() => setEditToggle(prevToggle => !prevToggle)}
                    className = 'edit-btn'>
                    Edit
                </button>
              </>
              :
            <>
            <AddchessPlayerForm 
                name={name}
                country={country}
                _id={_id}
                btnText='Submit Edit' 
                submit={editchessPlayer} />
            <button
                onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                Close
            </button>
            </>
            }
        </div>
    );
}
 
export default ChessPlayer;