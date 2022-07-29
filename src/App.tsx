import React from 'react';
import { ThemeProvider } from 'styled-components'
import { BirthDateTheme } from "./styles/BirthDateTheme";
import {Outlet} from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import { Reset } from 'styled-reset'
import GlobalStyle from "./styles/GlobalStyle";


function App() {
    const theme = { ...BirthDateTheme }
    return (

    <div className="App">
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Reset />
            <Navigation />
            <Outlet />
        </ThemeProvider>
    </div>
  );
}

export default App;
