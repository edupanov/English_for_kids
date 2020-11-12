import React from 'react';
import {CardType} from "../../App";
import GameCard from "./GameCard";
import { StyledMainCard } from '../../styles/StyledMainCard';
import { StyledCard } from '../../styles/StyledCard';
import {StyledGameCard} from "../../styles/StyledGameCard";



export type CardsType = {
    cards: CardType[];
}

function GameCards(props: CardsType) {
    return (
        <>
            {
                props.cards.map(t =>
                    <StyledGameCard key={t.id}>
                        <GameCard
                            word={t.word}
                            translation={t.translation}
                            image={t.image}
                            audioSrc={t.audioSrc}
                            id={t.id}
                        />
                    </StyledGameCard>
                )
            }
        </>
    );
}

export default GameCards;
