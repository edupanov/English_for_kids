import React from 'react';
import {StyledCategories} from "./Styled.categories";
import {CategoriesType} from "../../App";
import {Link} from "react-router-dom";

type MainCardType = {
    tittle: CategoriesType[]
}

function MainPage(props: MainCardType) {
    return (
        <>
                        {
                props.tittle.map(c =>
                    <StyledCategories key={c.id}>
                        <Link className="link" to={c.link}>
                            <div className="card-inner">
                                <div className="card-front">
                                    <h2 className='card-title'>{c.title}</h2>
                                </div>
                            </div>
                        </Link>
                    </StyledCategories>)
            }
        </>
    );
}

export default MainPage;
