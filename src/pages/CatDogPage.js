import React, {useReducer} from 'react';
import Cats from "../components/Cats";
import Dogs from "../components/Dogs";


const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CAT':
            const cat = action.payload
            const catId = state.cats.slice(-1)[0]?.id + 1 || 1
            cat.id = catId
            return {...state, cats: [...state.cats, cat]}
        case 'ADD_DOG':
            const dog = action.payload;
            const dogId = state.dogs.slice(-1)[0]?.id + 1 || 1
            dog.id = dogId
            return {...state, dogs: [...state.dogs, dog]}
        case 'DELL_CAT':
            const idForDeleteCat = action.payload;
            const catIndex = state.cats.findIndex(value => value.id === idForDeleteCat);
            state.cats.slice(catIndex, 1)
            return {...state};
        case 'DELL_DOG':
            const idForDeleteDog = action.payload;
            const dogIndex = state.dogs.findIndex(value => value.id === idForDeleteDog);
            state.dogs.slice(dogIndex, 1)
            return {...state};
        default:
            return state;
    }
}
const CatDogPage = () => {
    const stateDispatch = useReducer(reducer, {cats: [], dogs: []});
    return (
        <div>
            <Cats stateDispatch={stateDispatch}/>
            <Dogs stateDispacth={stateDispatch}/>
        </div>
    );
};

export default CatDogPage;