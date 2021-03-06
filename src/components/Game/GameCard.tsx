import React from 'react';
import useSound from "use-sound";
import {CardType} from "../../App";

function GameCard(props: CardType) {

    const [play, {stop}] = useSound(
        props.audioSrc
    );

    return (
        <>
            {
                <div
                    className="card__inner"
                    onMouseEnter={() => {
                        play()
                    }}
                    onMouseLeave={() => {
                        stop()
                    }}
                >
                    <div className="card--front"
                         style={{backgroundImage: `url(${props.image})`}}
                    >
                        <h2 className='card__title'>{props.translation}</h2>
                    </div>
                </div>
            }
        </>
    );
}

export default GameCard;
