import React from 'react';
import Card from "./Card";
import {StyledCard} from "./Styled.card";

export type CardType = {
    word: string
    translation: string
    image: string
    audioSrc: string
    id: string
}

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
