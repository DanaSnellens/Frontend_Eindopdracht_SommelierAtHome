import React from "react";

function WineDetailCard() {
    return (
        <article className="wine-detail-card">
{/*            {console.log('Rerender is triggered')}*/}
{/*            {Object.keys(wines).length > 0 &&*/}
                <>
                    <img
                        alt="Afbeelding wijn"
                        src={afbeelding-wijn}
                    />
                    <h2>{wine.name}</h2>

                    <p><strong>Moves: </strong>{pokemon.moves.length}</p>
                    <p><strong>Weight: </strong>{pokemon.weight}</p>
                    <p><strong>Abilities: </strong></p>
                    <ul>
                        {pokemon.abilities.map((ability) => {
                            return (
                                <li key={`${ability.ability.name}-${pokemon.name}`}>
                                    {ability.ability.name}
                                </li>
                            )
                        })}
                    </ul>
                </>
{/*            }*/}
          {/*  {loading && <p>Loading...</p>}
            {Object.keys(pokemon).length === 0 && error && <p>Er ging iets mis bij het ophalen van deze Pokèmon...</p>}
*/}        </article>
    )



}

export default WineDetailCard;


