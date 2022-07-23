import React from 'react';
import {CardItem} from "./styles";

function Card(props:any) {

    const splitDate = (date:any) => {
        const splittedDate = date.split('-')
        return splittedDate
    }
    const getDay = (date:any) => {
       const splittedDate =  splitDate(date)

        const day = splittedDate[2];

        return day
    }
    const getMonth = (date:any) => {
        const splittedDate =  splitDate(date)

        const month = splittedDate[1];
        const monthDate = new Date();
        monthDate.setMonth(month - 1);
        return monthDate.toLocaleString('en-US', {
            month: 'long',
        })
    }



    return (
        <CardItem>
            <div>
                <span>{getDay(props.data.birth_date)}</span>
                <span>{getMonth(props.data.birth_date)}</span>
            </div>
            <div>
                <h2>{props.data.name}</h2>
                <span>{}</span>
            </div>
            <div></div>
        </CardItem>
    );
}

export default Card;
