import React, {useEffect, useState} from 'react';
import Button from './components/Button/Button'
import { ThemeProvider } from 'styled-components'
import { BirthDateTheme } from "./BirthDateTheme";
import FormField from "./components/FormField/FormField";
import axios from "axios";


function App() {
    const theme = { ...BirthDateTheme }
    const [data, setData] = useState<any[]>([])

    useEffect(() => {
        axios('http://localhost:8000/api/birthdays').then(r => {
            setData(r.data)
            console.log(r.data)
        }).catch(error => {
            console.log(error)
        });
    },[])



    return (
    <div className="App">
        <ThemeProvider theme={theme}>
            <header className="App-header">
                <FormField title="Email" type="email" placeholder="example@gmail.com" />
                <FormField title="password" type="password" placeholder="" />
                <Button />
                {data === [] ?        (<ul>
                    {data?.map((item) =>
                        <li key={item.id}>{item.name}</li>
                    )}
                </ul>) : <span>no data</span>

                }
            </header>
        </ThemeProvider>
    </div>
  );
}

export default App;
