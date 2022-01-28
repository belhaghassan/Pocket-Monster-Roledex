import React from "react";

import './card.styles.css'

export const Card = props => (
    <div className="card-container">
        <h3 className="ID"> { props.monster.id }</h3>
        <img 
            alt="monster" 
            // src={require('../../assets/images/' + "001" + '.png')}
            src= {'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/' + id(props.monster.id) + '.png'}

        />
        <h2> { props.monster.name.english }</h2>
        <h3> { props.monster.type[0] } Type</h3>
    </div>
);

const id = function(index) {
    if (index < 10){
        return '00' + index;
    }   
    else if (index < 100) {
        return '0' + index;
    }
    else { return index}
}