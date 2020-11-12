import React, {useState} from 'react';
import {v1} from 'uuid';
import Header from "./components/Header/Header";
import {BrowserRouter} from "react-router-dom";
import Study from "./components/Study/Study";
import Button from "./components/Button";


export type CategoriesType = {
    title: string
    id: string
    link: string
}

export type CardType = {
    word: string
    translation?: string
    image: string
    audioSrc: string
    id: string
}

function App() {

    const ActionAId = v1()
    const ActionBId = v1()
    const ActionCId = v1()
    const AdjectiveId = v1()
    const AnimalAId = v1()
    const AnimalBId = v1()
    const ClothesId = v1()
    const EmotionsId = v1()

    const [categories, ] = useState<CategoriesType[]>([
        {link: 'Action_setA', id: ActionAId, title: 'Action (setA)'},
        {link: 'Action_setB', id: ActionBId, title: 'Action (setB)'},
        {link: 'Action_setC', id: ActionCId, title: 'Action (setC)'},
        {link: 'Adjective', id: AdjectiveId, title: 'Adjective'},
        {link: 'Animal_setA', id: AnimalAId, title: 'Animal (setA)'},
        {link: 'Animal_setB', id: AnimalBId, title: 'Animal (setB)'},
        {link: 'Clothes', id: ClothesId, title: 'Clothes'},
        {link: 'Emotions', id: EmotionsId, title: 'Emotions'},
    ])

    const [cards, ] = useState({
        [ActionAId]: [
            {
                word: 'cry',
                translation: 'плакать',
                image: `${process.env.PUBLIC_URL}/assets/img/cry.jpg` ,
                audioSrc: `${process.env.PUBLIC_URL}/assets/audio/cry.mp3`,
                id: v1()
            },
            {
                word: 'dance',
                translation: 'танцевать',
                image: `${process.env.PUBLIC_URL}/assets/img/dance.jpg`,
                audioSrc: `${process.env.PUBLIC_URL}/assets/audio/dance.mp3`,
                id: v1()
            },
            {
                word: 'dive',
                translation: 'нырять',
                image: `${process.env.PUBLIC_URL}/assets/img/dive.jpg`,
                audioSrc: `${process.env.PUBLIC_URL}/assets/audio/dive.mp3`,
                id: v1()
            },
            {
                word: 'draw',
                translation: 'рисовать',
                image: `${process.env.PUBLIC_URL}/assets/img/draw.jpg`,
                audioSrc: `${process.env.PUBLIC_URL}/assets/audio/draw.mp3`,
                id: v1()
            },
            {
                word: 'fish',
                translation: 'ловить рыбу',
                image: `${process.env.PUBLIC_URL}/assets/img/fish.jpg`,
                audioSrc: `${process.env.PUBLIC_URL}/assets/audio/fish.mp3`,
                id: v1()
            },
            {
                word: 'fly',
                translation: 'летать',
                image: `${process.env.PUBLIC_URL}/assets/img/fly.jpg`,
                audioSrc: `${process.env.PUBLIC_URL}/assets/audio/fly.mp3`,
                id: v1()
            },
            {
                word: 'hug',
                translation: 'обнимать',
                image: `${process.env.PUBLIC_URL}/assets/img/hug.jpg`,
                audioSrc: `${process.env.PUBLIC_URL}/assets/audio/hug.mp3`,
                id: v1()
            },
            {
                word: 'jump',
                translation: 'прыгать',
                image: `${process.env.PUBLIC_URL}/assets/img/jump.jpg`,
                audioSrc: `${process.env.PUBLIC_URL}/assets/audio/jump.mp3`,
                id: v1()
            },
        ],
        [ActionBId]: [
            {
                word: 'open',
                translation: 'открывать',
                image: `${process.env.PUBLIC_URL}/assets/img/open.jpg`,
                audioSrc: `${process.env.PUBLIC_URL}/assets/audio/open.mp3`,
                id: v1()
            },
            {
                word: 'play',
                translation: 'играть',
                image: `${process.env.PUBLIC_URL}/assets/img/play.jpg`,
                audioSrc: `${process.env.PUBLIC_URL}/assets/audio/play.mp3`,
                id: v1()
            },
            {
                word: 'point',
                translation: 'указывать',
                image: `${process.env.PUBLIC_URL}/assets/img/point.jpg`,
                audioSrc: `${process.env.PUBLIC_URL}/assets/audio/point.mp3`,
                id: v1()
            },
            {
                word: 'ride',
                translation: 'ездить',
                image: `${process.env.PUBLIC_URL}/assets/img/ride.jpg`,
                audioSrc: `${process.env.PUBLIC_URL}/assets/audio/ride.mp3`,
                id: v1()
            },
            {
                word: 'run',
                translation: 'бегать',
                image: `${process.env.PUBLIC_URL}/assets/img/run.jpg`,
                audioSrc: `${process.env.PUBLIC_URL}/assets/audio/run.mp3`,
                id: v1()
            },
            {
                word: 'sing',
                translation: 'петь',
                image: `${process.env.PUBLIC_URL}/assets/img/sing.jpg`,
                audioSrc: `${process.env.PUBLIC_URL}/assets/audio/sing.mp3`,
                id: v1()
            },
            {
                word: 'skip',
                translation: 'пропускать, прыгать',
                image: `${process.env.PUBLIC_URL}/assets/img/skip.jpg`,
                audioSrc: `${process.env.PUBLIC_URL}/assets/audio/skip.mp3`,
                id: v1()
            },
            {
                word: 'swim',
                translation: 'плавать',
                image: `${process.env.PUBLIC_URL}/assets/img/swim.jpg`,
                audioSrc: `${process.env.PUBLIC_URL}/assets/audio/swim.mp3`,
                id: v1()
            },
        ],
        [ActionCId]: [
            {
                word: 'argue',
                translation: 'спорить',
                image: `${process.env.PUBLIC_URL}/assets/img/argue.jpg`,
                audioSrc: `${process.env.PUBLIC_URL}/assets/audio/argue.mp3`,
                id: v1()
            },
            {
                word: 'build',
                translation: 'строить',
                image: `${process.env.PUBLIC_URL}/assets/img/build.jpg`,
                audioSrc: `${process.env.PUBLIC_URL}/assets/audio/build.mp3`,
                id: v1()
            },
            {
                word: 'carry',
                translation: 'нести',
                image: `${process.env.PUBLIC_URL}/assets/img/carry.jpg`,
                audioSrc: `${process.env.PUBLIC_URL}/assets/audio/carry.mp3`,
                id: v1()
            },
            {
                word: 'catch',
                translation: 'ловить',
                image: `${process.env.PUBLIC_URL}/assets/img/catch.jpg`,
                audioSrc: `${process.env.PUBLIC_URL}/assets/audio/catch.mp3`,
                id: v1()
            },
            {
                word: 'drive',
                translation: 'водить',
                image: `${process.env.PUBLIC_URL}/assets/img/drive.jpg`,
                audioSrc: `${process.env.PUBLIC_URL}/assets/audio/drive.mp3`,
                id: v1()
            },
            {
                word: 'drop',
                translation: 'падать',
                image: `${process.env.PUBLIC_URL}/assets/img/drop.jpg`,
                audioSrc: `${process.env.PUBLIC_URL}/assets/audio/drop.mp3`,
                id: v1()
            },
            {
                word: 'pull',
                translation: 'тянуть',
                image: `${process.env.PUBLIC_URL}/assets/img/pull.jpg`,
                audioSrc: `${process.env.PUBLIC_URL}/assets/audio/pull.mp3`,
                id: v1()
            },
            {
                word: 'push',
                translation: 'толкать',
                image: `${process.env.PUBLIC_URL}/assets/img/push.jpg`,
                audioSrc: `${process.env.PUBLIC_URL}/assets/audio/push.mp3`,
                id: v1()
            },
        ],
        [AdjectiveId]: [
            {
                word: 'big',
                translation: 'большой',
                image: `${process.env.PUBLIC_URL}/assets/img/big.jpg`,
                audioSrc: `${process.env.PUBLIC_URL}/assets/audio/big.mp3`,
                id: v1()
            },
            {
                word: 'small',
                translation: 'маленький',
                image: `${process.env.PUBLIC_URL}/assets/img/small.jpg`,
                audioSrc: `${process.env.PUBLIC_URL}/assets/audio/small.mp3`,
                id: v1()
            },
            {
                word: 'fast',
                translation: 'быстрый',
                image: `${process.env.PUBLIC_URL}/assets/img/fast.jpg`,
                audioSrc: `${process.env.PUBLIC_URL}/assets/audio/fast.mp3`,
                id: v1()
            },
            {
                word: 'slow',
                translation: 'медленный',
                image: `${process.env.PUBLIC_URL}/assets/img/slow.jpg`,
                audioSrc: `${process.env.PUBLIC_URL}/assets/audio/slow.mp3`,
                id: v1()
            },
            {
                word: 'friendly',
                translation: 'дружелюбный',
                image: `${process.env.PUBLIC_URL}/assets/img/friendly.jpg`,
                audioSrc: `${process.env.PUBLIC_URL}/assets/audio/friendly.mp3`,
                id: v1()
            },
            {
                word: 'unfriendly',
                translation: 'недружелюбный',
                image: `${process.env.PUBLIC_URL}/assets/img/unfriendly.jpg`,
                audioSrc: `${process.env.PUBLIC_URL}/assets/audio/unfriendly.mp3`,
                id: v1()
            },
            {
                word: 'young',
                translation: 'молодой',
                image: `${process.env.PUBLIC_URL}/assets/img/young.jpg`,
                audioSrc: `${process.env.PUBLIC_URL}/assets/audio/young.mp3`,
                id: v1()
            },
            {
                word: 'old',
                translation: 'старый',
                image: `${process.env.PUBLIC_URL}/assets/img/old.jpg`,
                audioSrc: `${process.env.PUBLIC_URL}/assets/audio/old.mp3`,
                id: v1()
            },
        ],
        [AnimalAId]: [
            {
                word: 'cat',
                translation: 'кот',
                image: `${process.env.PUBLIC_URL}/assets/img/cat.jpg`,
                audioSrc: `${process.env.PUBLIC_URL}/assets/audio/cat.mp3`,
                id: v1()
            },
            {
                word: 'chick',
                translation: 'цыплёнок',
                image: `${process.env.PUBLIC_URL}/assets/img/chick.jpg`,
                audioSrc: `${process.env.PUBLIC_URL}/assets/audio/chick.mp3`,
                id: v1()
            },

            {
                word: 'chicken',
                translation: 'курица',
                image: `${process.env.PUBLIC_URL}/assets/img/chicken.jpg`,
                audioSrc: `${process.env.PUBLIC_URL}/assets/audio/chicken.mp3`,
                id: v1()
            },
            {
                word: 'dog',
                translation: 'собака',
                image: `${process.env.PUBLIC_URL}/assets/img/dog.jpg`,
                audioSrc: `${process.env.PUBLIC_URL}/assets/audio/dog.mp3`,
                id: v1()
            },
            {
                word: 'horse',
                translation: 'лошадь',
                image: `${process.env.PUBLIC_URL}/assets/img/horse.jpg`,
                audioSrc: `${process.env.PUBLIC_URL}/assets/audio/horse.mp3`,
                id: v1()
            },
            {
                word: 'pig',
                translation: 'свинья',
                image: `${process.env.PUBLIC_URL}/assets/img/pig.jpg`,
                audioSrc: `${process.env.PUBLIC_URL}/assets/audio/pig.mp3`,
                id: v1()
            },
            {
                word: 'rabbit',
                translation: 'кролик',
                image: `${process.env.PUBLIC_URL}/assets/img/rabbit.jpg`,
                audioSrc: `${process.env.PUBLIC_URL}/assets/audio/rabbit.mp3`,
                id: v1()
            },
            {
                word: 'sheep',
                translation: 'овца',
                image: `${process.env.PUBLIC_URL}/assets/img/sheep.jpg`,
                audioSrc: `${process.env.PUBLIC_URL}/assets/audio/sheep.mp3`,
                id: v1()
            },
        ],
        [AnimalBId]: [
            {
                word: 'bird',
                translation: 'птица',
                image: `${process.env.PUBLIC_URL}/assets/img/bird.jpg`,
                audioSrc: `${process.env.PUBLIC_URL}/assets/audio/bird.mp3`,
                id: v1()
            },
            {
                word: 'fish',
                translation: 'рыба',
                image: `${process.env.PUBLIC_URL}/assets/img/fish1.jpg`,
                audioSrc: `${process.env.PUBLIC_URL}/assets/audio/fish.mp3`,
                id: v1()
            },
            {
                word: 'frog',
                translation: 'жаба',
                image: `${process.env.PUBLIC_URL}/assets/img/frog.jpg`,
                audioSrc: `${process.env.PUBLIC_URL}/assets/audio/frog.mp3`,
                id: v1()
            },
            {
                word: 'giraffe',
                translation: 'жирафа',
                image: `${process.env.PUBLIC_URL}/assets/img/giraffe.jpg`,
                audioSrc: `${process.env.PUBLIC_URL}/assets/audio/giraffe.mp3`,
                id: v1()
            },
            {
                word: 'lion',
                translation: 'лев',
                image: `${process.env.PUBLIC_URL}/assets/img/lion.jpg`,
                audioSrc: `${process.env.PUBLIC_URL}/assets/audio/lion.mp3`,
                id: v1()
            },
            {
                word: 'mouse',
                translation: 'мышь',
                image: `${process.env.PUBLIC_URL}/assets/img/mouse.jpg`,
                audioSrc: `${process.env.PUBLIC_URL}/assets/audio/mouse.mp3`,
                id: v1()
            },
            {
                word: 'turtle',
                translation: 'черепаха',
                image: `${process.env.PUBLIC_URL}/assets/img/turtle.jpg`,
                audioSrc: `${process.env.PUBLIC_URL}/assets/audio/turtle.mp3`,
                id: v1()
            },
            {
                word: 'dolphin',
                translation: 'дельфин',
                image: `${process.env.PUBLIC_URL}/assets/img/dolphin.jpg`,
                audioSrc: `${process.env.PUBLIC_URL}/assets/audio/dolphin.mp3`,
                id: v1()
            },

        ],
        [ClothesId]: [
            {
                word: 'skirt',
                translation: 'юбка',
                image: `${process.env.PUBLIC_URL}/assets/img/skirt.jpg`,
                audioSrc: `${process.env.PUBLIC_URL}/assets/audio/skirt.mp3`,
                id: v1()
            },
            {
                word: 'pants',
                translation: 'брюки',
                image: `${process.env.PUBLIC_URL}/assets/img/pants.jpg`,
                audioSrc: `${process.env.PUBLIC_URL}/assets/audio/pants.mp3`,
                id: v1()
            },
            {
                word: 'blouse',
                translation: 'блузка',
                image: `${process.env.PUBLIC_URL}/assets/img/blouse.jpg`,
                audioSrc: `${process.env.PUBLIC_URL}/assets/audio/blouse.mp3`,
                id: v1()
            },
            {
                word: 'dress',
                translation: 'платье',
                image: `${process.env.PUBLIC_URL}/assets/img/dress.jpg`,
                audioSrc: `${process.env.PUBLIC_URL}/assets/audio/dress.mp3`,
                id: v1()
            },
            {
                word: 'boot',
                translation: 'ботинок',
                image: `${process.env.PUBLIC_URL}/assets/img/boot.jpg`,
                audioSrc: `${process.env.PUBLIC_URL}/assets/audio/boot.mp3`,
                id: v1()
            },
            {
                word: 'shirt',
                translation: 'рубашка',
                image: `${process.env.PUBLIC_URL}/assets/img/shirt.jpg`,
                audioSrc: `${process.env.PUBLIC_URL}/assets/audio/shirt.mp3`,
                id: v1()
            },
            {
                word: 'coat',
                translation: 'пальто',
                image: `${process.env.PUBLIC_URL}/assets/img/coat.jpg`,
                audioSrc: `${process.env.PUBLIC_URL}/assets/audio/coat.mp3`,
                id: v1()
            },
            {
                word: 'shoe',
                translation: 'туфли',
                image: `${process.env.PUBLIC_URL}/assets/img/shoe.jpg`,
                audioSrc: `${process.env.PUBLIC_URL}/assets/audio/shoe.mp3`,
                id: v1()
            },
        ],
        [EmotionsId]: [
            {
                word: 'sad',
                translation: 'грустный',
                image: `${process.env.PUBLIC_URL}/assets/img/sad.jpg`,
                audioSrc: `${process.env.PUBLIC_URL}/assets/audio/sad.mp3`,
                id: v1()
            },
            {
                word: 'angry',
                translation: 'сердитый',
                image: `${process.env.PUBLIC_URL}/assets/img/angry.jpg`,
                audioSrc: `${process.env.PUBLIC_URL}/assets/audio/angry.mp3`,
                id: v1()
            },
            {
                word: 'happy',
                translation: 'счастливый',
                image: `${process.env.PUBLIC_URL}/assets/img/happy.jpg`,
                audioSrc: `${process.env.PUBLIC_URL}/assets/audio/happy.mp3`,
                id: v1()
            },
            {
                word: 'tired',
                translation: 'уставший',
                image: `${process.env.PUBLIC_URL}/assets/img/tired.jpg`,
                audioSrc: `${process.env.PUBLIC_URL}/assets/audio/tired.mp3`,
                id: v1()
            },
            {
                word: 'surprised',
                translation: 'удивлённый',
                image: `${process.env.PUBLIC_URL}/assets/img/surprised.jpg`,
                audioSrc: `${process.env.PUBLIC_URL}/assets/audio/surprised.mp3`,
                id: v1()
            },
            {
                word: 'scared',
                translation: 'испуганный',
                image: `${process.env.PUBLIC_URL}/assets/img/scared.jpg`,
                audioSrc: `${process.env.PUBLIC_URL}/assets/audio/scared.mp3`,
                id: v1()
            },
            {
                word: 'smile',
                translation: 'улыбка',
                image: `${process.env.PUBLIC_URL}/assets/img/smile.jpg`,
                audioSrc: `${process.env.PUBLIC_URL}/assets/audio/smile.mp3`,
                id: v1()
            },
            {
                word: 'laugh',
                translation: 'смех',
                image: `${process.env.PUBLIC_URL}/assets/img/laugh.jpg`,
                audioSrc: `${process.env.PUBLIC_URL}/assets/audio/laugh.mp3`,
                id: v1()
            },
        ],
    })

    const [value, setValue] = useState<boolean>(false)


    return (
        <BrowserRouter>
            <div className="App">
                <Header title={categories}/>
                <Button
                    isOn={value}
                    handleToggle={() => setValue(!value)}
                />
                <Study
                    title={categories}
                    cards={cards}
                    isOn={value}
                />

            </div>
        </BrowserRouter>
    );
}


export default App;
