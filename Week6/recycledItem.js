import { useState } from 'react';
import AddrecycledItemForm from './AddrecycledItemForm';

function recycledItem({ deleterecycledItem, editrecycledItem, name, description, _id }) {
    const [editToggle, setEditToggle] = useState(false)
    return (
        <div classname='recycledItem'>
            { !editToggle ?
              <>
                <h1>Name: {name}</h1>
                <p>Description: {description}</p>
                <button 
                    onClick={() => deleterecycledItem(_id)} 
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
            <AddrecycledItemForm 
                name={name}
                description={description}
                _id={_id}
                btnText='Submit Edit' 
                submit={editrecycledItem} />
            <button
                onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                Close
            </button>
            </>
            }
        </div>
    );
}


export default recycledItem;