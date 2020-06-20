import React, { Component } from "react";
import Pokecard from "./Pokecard";
import Pokegame from "./Pokegame";
import './Pokedex.css';

class Pokedex extends Component {

  render() {
    console.log(this.props.pokemon);
    const PokeCardList = this.props.pokemon.map((p) => {
      return (
        <Pokecard
          id={p.id}
          key={p.id}
          name={p.name}
          type={p.type}
          base_experience={p.base_experience}
        />
      );
    });

    return (
      <div className="pokedex">
        <h1>{this.props.heading}</h1>
        <div className="pokedex-experience">
          Total Experience: {this.props.totalExp}
        </div>
        <div className="pokedex-winner">
          {/* {this.props.isWinner ? "The Winner" : "Not the Winner"} */}
          {this.props.isWinner && "The Winner"}
        </div>
        <div className="pokedex-cards">{PokeCardList}</div>
      </div>
    );
  }
}

export default Pokedex;
