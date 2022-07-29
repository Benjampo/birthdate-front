import React from 'react';
import {
    CardItem,
    ItemDate,
    ItemDateDay,
    ItemDateMonth,
    ItemName,
    ItemNameAge,
    ItemNameTitle
} from "./styles";
import {BirthDateTheme} from "../../styles/BirthDateTheme";

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

    const nextBirthdayAge = (date:any) => {
        const today =  new Date()
        const birth = new Date(date)

        return Math.abs(birth.getUTCFullYear() - today.getUTCFullYear()) + 1;
    }



    return (
        <CardItem>
            <ItemDate>
                <ItemDateDay>{getDay(props.data.birth_date)}</ItemDateDay>
                <ItemDateMonth>{getMonth(props.data.birth_date)}</ItemDateMonth>
            </ItemDate>
            <ItemName>
                <ItemNameTitle>{props.data.name}</ItemNameTitle>
                <ItemNameAge>{nextBirthdayAge(props.data.birth_date)}</ItemNameAge>
            </ItemName>
            <div></div>
        </CardItem>
    );
}

export default Card;
