import './App.css';
import Rickandmorty from "./components/rickandmorty";

let rickandmorty = [
    {
        "id": 69,
        "name": "Commander Rick",
        "status": "Dead",
        "species": "Human",
        "gender": "Male",
        "image": "https://rickandmortyapi.com/api/character/avatar/69.jpeg",
    },
    {
        "id": 308,
        "name": "Scropon",
        "status": "unknown",
        "species": "Alien",
        "gender": "Male",
        "image": "https://rickandmortyapi.com/api/character/avatar/308.jpeg",
    },
    {
        "id": 440,
        "name": "Veterinary Nurse",
        "status": "Alive",
        "species": "Human",
        "gender": "Male",
        "image": "https://rickandmortyapi.com/api/character/avatar/440.jpeg",
    },
    {
        "id": 130,
        "name": "Galactic Federation President",
        "status": "Dead",
        "species": "Alien",
        "gender": "Male",
        "image": "https://rickandmortyapi.com/api/character/avatar/130.jpeg",
    },
    {
        "id": 399,
        "name": "Tiny-persons advocacy group lawyer",
        "status": "Alive",
        "species": "Mythological Creature",
        "gender": "Male",
        "image": "https://rickandmortyapi.com/api/character/avatar/399.jpeg",
    },
    {
        "id": 493,
        "name": "Secretary of the Interior",
        "status": "Alive",
        "species": "Human",
        "gender": "Male",
        "image": "https://rickandmortyapi.com/api/character/avatar/493.jpeg",
    }
]

function App() {
    return (
        <div>
            <h1>Rick And Morty</h1>
            <Rickandmorty items={rickandmorty}/>
        </div>
    );
}

export default App;
