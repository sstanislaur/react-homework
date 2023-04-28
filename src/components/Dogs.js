import React from 'react';
import {useForm} from "react-hook-form";

const Dogs = ({stateDispacth}) => {
    const {reset, register, handleSubmit} = useForm()
    const [{dogs}, dispatch] = stateDispacth
    const saveDog = (dog) => {
        dispatch({type: 'ADD_DOG', payload: dog})
        reset()
    }
    return (
        <div>
            <form onSubmit={handleSubmit(saveDog)}>
                <input type="text" placeholder={'dog'} {...register('name')}/>
                <button>save</button>
            </form>
            {dogs.map(dog => <div key={dog.id}>{dog.name}
                <button onClick={() => dispatch({type:'DELL_DOG', payload:dog.id})}>Delete</button>
            </div>)}
        </div>
    );
};

export default Dogs;