import React from "react";
import "./Pokecard.css";

const POKE_API =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

const POKE_FANCY_API =
  "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

const leftZeroPad = (num, size) => {
  const s = "000" + num;
  return s.substr(s.length - 3);
};

const Pokecard = (props) => {
  const id = leftZeroPad(props.id, 3);
  console.log(leftZeroPad(props.id, 3));
  const imgSrc = `${POKE_FANCY_API}${id}.png`;

  return (
    <div className="pokecard">
      <h3>{props.name}</h3>
      <img src={imgSrc} alt={props.name} />
      <div className="pokecard-type">{props.type}</div>
      <div className="pokecard-exp">Exp: {props.base_experience}</div>
    </div>
  );
};

export default Pokecard;
