import React, {useEffect} from 'react';
import {CardItem} from "./styles";

function Card(props:any) {

    const splitDate = (date:any) => {
        const splittedDate = date.split('-')
        const day = splittedDate[2];
        const month = splittedDate[1];
        const monthDate = new Date();
        monthDate.setMonth(month - 1);
        const monthString = monthDate.toLocaleString('en-US', {
            month: 'long',
        })
        return {
            'day': day,
            'month': monthString,
        };
    }



    return (
        <CardItem>
            <div>
                <span>{splitDate(props.data.birth_date).day}</span>
                <span>{splitDate(props.data.birth_date).month}</span>
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
