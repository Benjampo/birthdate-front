import React, {useEffect, useState} from 'react';
import Button from './components/Button/Button'
import { ThemeProvider } from 'styled-components'
import { BirthDateTheme } from "./BirthDateTheme";
import FormField from "./components/FormField/FormField";
import axios from "axios";

function App() {
    const theme = { ...BirthDateTheme }
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
    <div className="App">
        <ThemeProvider theme={theme}>
            <header className="App-header">
                <FormField title="Email" type="email" placeholder="example@gmail.com" />
                <FormField title="password" type="password" placeholder="" />
                <Button />
                <ul>
                    {data.map((item:any) =>
                    <li>{item.name}</li>
                    )};
                </ul>
            </header>
        </ThemeProvider>
    </div>
  );
}

export default App;
