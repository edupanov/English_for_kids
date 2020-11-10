import React from 'react';
import useSound from "use-sound";
import {CardType} from "./Cards";


function Card(props: CardType) {

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
                        <h2 className='card__title'>{props.word}</h2>
                    </div>
                    <div className="card--back"
                         style={{backgroundImage: `url(${props.image})`}}>
                        <h2 className='card__title'>{props.translation}</h2>
                    </div>
                </div>
            }
        </>
    );
}

export default Card;
