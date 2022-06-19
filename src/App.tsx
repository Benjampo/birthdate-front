import React from 'react';
import Button from './components/Button/Button'
import { ThemeProvider } from 'styled-components'
import { BirthDateTheme } from "./BirthDateTheme";
import FormField from "./components/FormField/FormField";

function App() {
    const theme = { ...BirthDateTheme }
  return (
    <div className="App">
        <ThemeProvider theme={theme}>
            <header className="App-header">
                <FormField title="Email" type="email" placeholder="example@gmail.com" />
                <FormField title="password" type="password" placeholder="" />
                <Button />
            </header>
        </ThemeProvider>
    </div>
  );
}

export default App;
