import React from 'react';
import {BirthContainer} from "./styles";
import Card from "../Card/Card";
import {useEffect, useState} from "react";
import axios from "axios";

function BirthDateContainer() {
	const [data, setData] = useState([])
	useEffect(() => {
		const getApi = async () => {
			const tempData =  await axios.get('http://127.0.0.1:8000/api/birthdays')
			setData(tempData.data.birthdays)
			console.log(tempData.data.birthdays);
		};
		getApi()
	}, []);
	return (
		<BirthContainer>
			<ul>
				{data.map((item) =>
					<Card key={item.id} data={item} />
				)};
			</ul>
		</BirthContainer>
	);
}

export default BirthDateContainer;
