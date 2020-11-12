import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {StyledCategories} from "../../styles/StyledCategories";
import MainPage from "./MainPage";
import Cards from "./Cards";
import {CardType, CategoriesType} from "../../App";

type StudyType = {
    title: CategoriesType[]
    cards: {[p: string]: CardType[]}
    isOn: boolean
}

function Study(props:StudyType) {
    return (
        <>
            <Redirect from={'/'} to={'/main'}/>
            <Switch>
                <Route exact path="/main"
                       render={(p) =>
                           <StyledCategories>
                               <MainPage
                                   {...p}
                                   tittle={props.title}
                               />
                           </StyledCategories>
                       }
                />
                {
                    props.title.map(c => {
                        let cardsForTitle = props.cards[c.id];
                        if(!props.isOn) {
                            return (
                                <Route key={c.id} path={'/' + c.link}
                                       render={(props) =>
                                           <StyledCategories>
                                               <Cards {...props}
                                                      cards={cardsForTitle}
                                               />
                                           </StyledCategories>
                                       }
                                />
                            )
                        } else {
                            return  (
                                <Route key={c.id} path={'/' + c.link}
                                       render={(props) =>
                                           <StyledCategories>
                                               <Cards {...props}
                                                         cards={cardsForTitle}
                                               />
                                           </StyledCategories>
                                       }
                                />
                            )

                        }

                    })
                }
            </Switch>
        </>
    )
}

export default Study
