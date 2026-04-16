import './App.css'
import styles from './App.module.css'
import { useState } from 'react';

function App() {
        const [pokemon, setPokemon] = useState(null);
    fetch("https://pokeapi.co/api/v2/pokemon/254")
    .then(response => response.json())
    .then(data =>{
        setPokemon(data);
    })


  if(pokemon === null){
    return (
        <section className={styles.pokemon}>
            <h2>Fetching Pokemon</h2>
        </section>
    )
} else{
    return (
        <section className={styles.pokemon}>
            <h2 className={styles.name}>{pokemon.name} ID:{pokemon.id}</h2>
            <img src={pokemon.sprites.front_default}/>
            <p>Base: {pokemon.stats[0].base_stat}</p>
            <p>Effort: {pokemon.stats[0].effort}</p>
        </section>
    )
}

}

export default App
