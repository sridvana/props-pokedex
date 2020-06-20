import React, { Component } from 'react'
import Pokedex from './Pokedex';
import Pokecard from './Pokecard';
import './Pokegame.css';

class Pokegame extends Component {
  static defaultProps = {
    pokemon: [
      { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
      { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
      { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
      { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
      { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
      { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
      { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
      { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
    ],
  };

  render() {
    console.log("inside Pokegame", this.props.pokemon);

    let hand1 = [];
    let hand2 = [...this.props.pokemon];

    console.log("hand2", hand2);

    while (hand1.length < hand2.length) {
      let randomNum = Math.floor(Math.random() * hand2.length);
      let randomPick = hand2.splice(randomNum, 1)[0];
      hand1.push(randomPick);
    }

    const exp1 = hand1.reduce(
      (exp, pokemon) => exp + pokemon.base_experience, 
      0
    );

    const exp2 = hand2.reduce(
      (exp, pokemon) => exp + pokemon.base_experience,
      0
    );

    return (
      <div className="pokegame">
        <div className="pokemon-pokedex">
          <Pokedex
            pokemon={this.props.pokemon}
            heading="Pokemon Full List"
            totalExp={exp1 + exp2}
          />
        </div>
        <div className="pokemon-pokedex">
          <Pokedex
            pokemon={hand1}
            heading="Pokemon Hand 1 List"
            totalExp={exp1}
            isWinner={exp1 > exp2}
          />
        </div>
        <div className="pokemon-pokedex">
          <Pokedex
            pokemon={hand2}
            heading="Pokemon Hand 2 List"
            totalExp={exp2}
            isWinner={exp2 > exp1}
          />
        </div>
      </div>
    );
  }
}

export default Pokegame;

