import React from "react";
import CardItem from "../CardItem";

const CardsList = () => {

    const img = 'https://sportishka.com/uploads/posts/2022-11/1667554538_47-sportishka-com-p-ozero-ritsa-pinterest-48.jpg';


    return (
        <>
        <CardItem img={img} >
            <div className="card-body">
                <h5 className="card-title"> Первая карточка</h5>
                <p className="card-text">Описание к первой карточке</p>
                <a href="##" className="btn btn-primary"> Добавить</a>
            </div>
        </CardItem>
        <CardItem>
            <div className="card-body">
                <h5 className="card-title"> Вторая карточка</h5>
                <p className="card-text">Описание ко второй карточке</p>
                <a href="##" className="btn btn-primary"> Добавить</a>
            </div>
        </CardItem>
        </>
    )



};


export default CardsList;