import React, {useEffect, useState} from 'react';
import axios from "axios";

function Home() {
    const [data, setData] = useState([])
    useEffect(() => {
        const getApi = async () => {
            const tempData =  await axios.get('http://127.0.0.1:8001/api/birthdays')
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
                    <li>{item.name}</li>
                )};
            </ul>
        </div>
    );
}

export default Home;
