import { useState } from 'react'

function AddrecycledItemForm({ submit, btnText, name, description, _id }) {
    const initialInputs = { name: name || '', description: description || '' };
    const [inputs, setInputs] = useState(initialInputs);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs(prevInputs => ({ ...prevInputs, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        submit(inputs);
        setInputs(initialInputs);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type ='text'
                name ='name'
                value ={inputs.name}
                onChange ={handleChange}
                placeholder ='Name' />
            <input
                type ='text'
                name ='description'
                value ={inputs.description}
                onChange ={handleChange}
                placeholder ='Description' />
            <button>Add Recycled Item</button>
        </form>
    )
}

export default AddrecycledItemForm;