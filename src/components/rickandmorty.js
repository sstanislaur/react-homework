import React from 'react';

const Rickandmorty = ({items: rickandmorty}) => {
    return (
        <div>
            {
                rickandmorty.map(value =>
                    <p>
                        <div>id: {value.id}</div>
                        <div>Name: {value.name}</div>
                        <div>status: {value.status.toString()}</div>
                        <div>species: {value.species}</div>
                        <div>gender: {value.gender}</div>
                        <div><img src={value.image} alt=""/></div>
                    </p>)
            }
        </div>
    );
};

export default Rickandmorty;