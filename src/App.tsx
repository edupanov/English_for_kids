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
                image: '%PUBLIC_URL%/assets/img/cry.jpg',
                audioSrc: '%PUBLIC_URL%/assets/audio/cry.mp3',
                id: v1()
            },
            {
                word: 'dance',
                translation: 'танцевать',
                image: './assets/img/dance.jpg',
                audioSrc: './assets/audio/dance.mp3',
                id: v1()
            },
            {
                word: 'dive',
                translation: 'нырять',
                image: './assets/img/dive.jpg',
                audioSrc: './assets/audio/dive.mp3',
                id: v1()
            },
            {
                word: 'draw',
                translation: 'рисовать',
                image: './assets/img/draw.jpg',
                audioSrc: './assets/audio/draw.mp3',
                id: v1()
            },
            {
                word: 'fish',
                translation: 'ловить рыбу',
                image: './assets/img/fish.jpg',
                audioSrc: './assets/audio/fish.mp3',
                id: v1()
            },
            {
                word: 'fly',
                translation: 'летать',
                image: './assets/img/fly.jpg',
                audioSrc: './assets/audio/fly.mp3',
                id: v1()
            },
            {
                word: 'hug',
                translation: 'обнимать',
                image: './assets/img/hug.jpg',
                audioSrc: './assets/audio/hug.mp3',
                id: v1()
            },
            {
                word: 'jump',
                translation: 'прыгать',
                image: './assets/img/jump.jpg',
                audioSrc: './assets/audio/jump.mp3',
                id: v1()
            },
        ],
        [ActionBId]: [
            {
                word: 'open',
                translation: 'открывать',
                image: './assets/img/open.jpg',
                audioSrc: './assets/audio/open.mp3',
                id: v1()
            },
            {
                word: 'play',
                translation: 'играть',
                image: './assets/img/play.jpg',
                audioSrc: './assets/audio/play.mp3',
                id: v1()
            },
            {
                word: 'point',
                translation: 'указывать',
                image: './assets/img/point.jpg',
                audioSrc: './assets/audio/point.mp3',
                id: v1()
            },
            {
                word: 'ride',
                translation: 'ездить',
                image: './assets/img/ride.jpg',
                audioSrc: './assets/audio/ride.mp3',
                id: v1()
            },
            {
                word: 'run',
                translation: 'бегать',
                image: './assets/img/run.jpg',
                audioSrc: './assets/audio/run.mp3',
                id: v1()
            },
            {
                word: 'sing',
                translation: 'петь',
                image: './assets/img/sing.jpg',
                audioSrc: './assets/audio/sing.mp3',
                id: v1()
            },
            {
                word: 'skip',
                translation: 'пропускать, прыгать',
                image: './assets/img/skip.jpg',
                audioSrc: './assets/audio/skip.mp3',
                id: v1()
            },
            {
                word: 'swim',
                translation: 'плавать',
                image: './assets/img/swim.jpg',
                audioSrc: './assets/audio/swim.mp3',
                id: v1()
            },
        ],
        [ActionCId]: [
            {
                word: 'argue',
                translation: 'спорить',
                image: './assets/img/argue.jpg',
                audioSrc: './assets/audio/argue.mp3',
                id: v1()
            },
            {
                word: 'build',
                translation: 'строить',
                image: './assets/img/build.jpg',
                audioSrc: './assets/audio/build.mp3',
                id: v1()
            },
            {
                word: 'carry',
                translation: 'нести',
                image: './assets/img/carry.jpg',
                audioSrc: './assets/audio/carry.mp3',
                id: v1()
            },
            {
                word: 'catch',
                translation: 'ловить',
                image: './assets/img/catch.jpg',
                audioSrc: './assets/audio/catch.mp3',
                id: v1()
            },
            {
                word: 'drive',
                translation: 'водить',
                image: './assets/img/drive.jpg',
                audioSrc: './assets/audio/drive.mp3',
                id: v1()
            },
            {
                word: 'drop',
                translation: 'падать',
                image: './assets/img/drop.jpg',
                audioSrc: './assets/audio/drop.mp3',
                id: v1()
            },
            {
                word: 'pull',
                translation: 'тянуть',
                image: './assets/img/pull.jpg',
                audioSrc: './assets/audio/pull.mp3',
                id: v1()
            },
            {
                word: 'push',
                translation: 'толкать',
                image: './assets/img/push.jpg',
                audioSrc: './assets/audio/push.mp3',
                id: v1()
            },
        ],
        [AdjectiveId]: [
            {
                word: 'big',
                translation: 'большой',
                image: './assets/img/big.jpg',
                audioSrc: './assets/audio/big.mp3',
                id: v1()
            },
            {
                word: 'small',
                translation: 'маленький',
                image: './assets/img/small.jpg',
                audioSrc: './assets/audio/small.mp3',
                id: v1()
            },
            {
                word: 'fast',
                translation: 'быстрый',
                image: './assets/img/fast.jpg',
                audioSrc: './assets/audio/fast.mp3',
                id: v1()
            },
            {
                word: 'slow',
                translation: 'медленный',
                image: './assets/img/slow.jpg',
                audioSrc: './assets/audio/slow.mp3',
                id: v1()
            },
            {
                word: 'friendly',
                translation: 'дружелюбный',
                image: './assets/img/friendly.jpg',
                audioSrc: './assets/audio/friendly.mp3',
                id: v1()
            },
            {
                word: 'unfriendly',
                translation: 'недружелюбный',
                image: './assets/img/unfriendly.jpg',
                audioSrc: './assets/audio/unfriendly.mp3',
                id: v1()
            },
            {
                word: 'young',
                translation: 'молодой',
                image: './assets/img/young.jpg',
                audioSrc: './assets/audio/young.mp3',
                id: v1()
            },
            {
                word: 'old',
                translation: 'старый',
                image: './assets/img/old.jpg',
                audioSrc: './assets/audio/old.mp3',
                id: v1()
            },
        ],
        [AnimalAId]: [
            {
                word: 'cat',
                translation: 'кот',
                image: './assets/img/cat.jpg',
                audioSrc: './assets/audio/cat.mp3',
                id: v1()
            },
            {
                word: 'chick',
                translation: 'цыплёнок',
                image: './assets/img/chick.jpg',
                audioSrc: './assets/audio/chick.mp3',
                id: v1()
            },

            {
                word: 'chicken',
                translation: 'курица',
                image: './assets/img/chicken.jpg',
                audioSrc: './assets/audio/chicken.mp3',
                id: v1()
            },
            {
                word: 'dog',
                translation: 'собака',
                image: './assets/img/dog.jpg',
                audioSrc: './assets/audio/dog.mp3',
                id: v1()
            },
            {
                word: 'horse',
                translation: 'лошадь',
                image: './assets/img/horse.jpg',
                audioSrc: './assets/audio/horse.mp3',
                id: v1()
            },
            {
                word: 'pig',
                translation: 'свинья',
                image: './assets/img/pig.jpg',
                audioSrc: './assets/audio/pig.mp3',
                id: v1()
            },
            {
                word: 'rabbit',
                translation: 'кролик',
                image: './assets/img/rabbit.jpg',
                audioSrc: './assets/audio/rabbit.mp3',
                id: v1()
            },
            {
                word: 'sheep',
                translation: 'овца',
                image: './assets/img/sheep.jpg',
                audioSrc: './assets/audio/sheep.mp3',
                id: v1()
            },
        ],
        [AnimalBId]: [
            {
                word: 'bird',
                translation: 'птица',
                image: './assets/img/bird.jpg',
                audioSrc: './assets/audio/bird.mp3',
                id: v1()
            },
            {
                word: 'fish',
                translation: 'рыба',
                image: './assets/img/fish1.jpg',
                audioSrc: './assets/audio/fish.mp3',
                id: v1()
            },
            {
                word: 'frog',
                translation: 'жаба',
                image: './assets/img/frog.jpg',
                audioSrc: './assets/audio/frog.mp3',
                id: v1()
            },
            {
                word: 'giraffe',
                translation: 'жирафа',
                image: './assets/img/giraffe.jpg',
                audioSrc: './assets/audio/giraffe.mp3',
                id: v1()
            },
            {
                word: 'lion',
                translation: 'лев',
                image: './assets/img/lion.jpg',
                audioSrc: './assets/audio/lion.mp3',
                id: v1()
            },
            {
                word: 'mouse',
                translation: 'мышь',
                image: './assets/img/mouse.jpg',
                audioSrc: './assets/audio/mouse.mp3',
                id: v1()
            },
            {
                word: 'turtle',
                translation: 'черепаха',
                image: './assets/img/turtle.jpg',
                audioSrc: './assets/audio/turtle.mp3',
                id: v1()
            },
            {
                word: 'dolphin',
                translation: 'дельфин',
                image: './assets/img/dolphin.jpg',
                audioSrc: './assets/audio/dolphin.mp3',
                id: v1()
            },

        ],
        [ClothesId]: [
            {
                word: 'skirt',
                translation: 'юбка',
                image: './assets/img/skirt.jpg',
                audioSrc: './assets/audio/skirt.mp3',
                id: v1()
            },
            {
                word: 'pants',
                translation: 'брюки',
                image: './assets/img/pants.jpg',
                audioSrc: './assets/audio/pants.mp3',
                id: v1()
            },
            {
                word: 'blouse',
                translation: 'блузка',
                image: './assets/img/blouse.jpg',
                audioSrc: './assets/audio/blouse.mp3',
                id: v1()
            },
            {
                word: 'dress',
                translation: 'платье',
                image: './assets/img/dress.jpg',
                audioSrc: './assets/audio/dress.mp3',
                id: v1()
            },
            {
                word: 'boot',
                translation: 'ботинок',
                image: './assets/img/boot.jpg',
                audioSrc: './assets/audio/boot.mp3',
                id: v1()
            },
            {
                word: 'shirt',
                translation: 'рубашка',
                image: './assets/img/shirt.jpg',
                audioSrc: './assets/audio/shirt.mp3',
                id: v1()
            },
            {
                word: 'coat',
                translation: 'пальто',
                image: './assets/img/coat.jpg',
                audioSrc: './assets/audio/coat.mp3',
                id: v1()
            },
            {
                word: 'shoe',
                translation: 'туфли',
                image: './assets/img/shoe.jpg',
                audioSrc: './assets/audio/shoe.mp3',
                id: v1()
            },
        ],
        [EmotionsId]: [
            {
                word: 'sad',
                translation: 'грустный',
                image: './assets/img/sad.jpg',
                audioSrc: './assets/audio/sad.mp3',
                id: v1()
            },
            {
                word: 'angry',
                translation: 'сердитый',
                image: './assets/img/angry.jpg',
                audioSrc: './assets/audio/angry.mp3',
                id: v1()
            },
            {
                word: 'happy',
                translation: 'счастливый',
                image: './assets/img/happy.jpg',
                audioSrc: './assets/audio/happy.mp3',
                id: v1()
            },
            {
                word: 'tired',
                translation: 'уставший',
                image: './assets/img/tired.jpg',
                audioSrc: './assets/audio/tired.mp3',
                id: v1()
            },
            {
                word: 'surprised',
                translation: 'удивлённый',
                image: './assets/img/surprised.jpg',
                audioSrc: './assets/audio/surprised.mp3',
                id: v1()
            },
            {
                word: 'scared',
                translation: 'испуганный',
                image: './assets/img/scared.jpg',
                audioSrc: './assets/audio/scared.mp3',
                id: v1()
            },
            {
                word: 'smile',
                translation: 'улыбка',
                image: './assets/img/smile.jpg',
                audioSrc: './assets/audio/smile.mp3',
                id: v1()
            },
            {
                word: 'laugh',
                translation: 'смех',
                image: './assets/img/laugh.jpg',
                audioSrc: './assets/audio/laugh.mp3',
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
