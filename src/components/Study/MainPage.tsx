import React from 'react';
import {StyledMainCard} from "../../styles/StyledMainCard";
import {CategoriesType} from "../../App";
import {Link} from "react-router-dom";

export type MainCardType = {
    tittle: CategoriesType[]
}

function MainPage(props: MainCardType) {
    return (
        <>
                        {
                props.tittle.map(c =>
                    <StyledMainCard key={c.id}>
                        <Link className="link" to={c.link}>
                            <div className="card-inner">
                                <div className="card-front">
                                    <h2 className='card-title'>{c.title}</h2>
                                </div>
                            </div>
                        </Link>
                    </StyledMainCard>)
            }
        </>
    );
}

export default MainPage;
