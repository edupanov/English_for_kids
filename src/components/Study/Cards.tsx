import React from 'react';
import Card from "./Card";
import {StyledCard} from "../../styles/StyledCard";
import {CardType} from "../../App";



export type CardsType = {
    cards: CardType[];
}

function Cards(props: CardsType) {
       return (
        <>
            {
                props.cards.map(t =>
                   <StyledCard key={t.id}>
                        <Card
                            word={t.word}
                            translation={t.translation}
                            image={t.image}
                            audioSrc={t.audioSrc}
                            id={t.id}
                        />
                    </StyledCard>
                )
            }
        </>
    );
}

export default Cards;
