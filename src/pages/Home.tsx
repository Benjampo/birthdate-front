import React, {useEffect, useState} from 'react';
import axios from "axios";
import Card from "../components/Card/Card";

function Home() {
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
        <div>
            <h1>Home</h1>
            <ul>
                {data.map((item:any) =>
                    <Card key={item.id} data={item} />
                )};
            </ul>
        </div>
    );
}

export default Home;
