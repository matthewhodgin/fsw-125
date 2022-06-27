import { v4 as uuidv4 } from "uuid";

export const listoftodos = [
    {
        name: 'Cardboard', 
        description: 'Box Cardboard', 
        recycleable: 'Yes', 
        quantiy: '1 million', 
        unitPrice: '10 cents each', 
        _id: uuidv4() 
    },
    {
        name: 'Alimunum', 
        description: 'Cans', 
        recycleable: 'Yes', 
        quantiy: '10 million', 
        unitPrice: '5 cents each', 
        _id: uuidv4()
    },
    {
        name: 'Mixed Paper', 
        description: 'Various Paper', 
        recycleable: 'No', 
        quantiy: '100 million', 
        unitPrice: '0 cents each', 
        _id: uuidv4()
    },
    {
        name: 'Glass', 
        description: 'Glass Bottles / Containers', 
        recycleable: 'Yes', 
        quantiy: '50 million', 
        unitPrice: '10 cents each', 
        _id: uuidv4()
    }
];
