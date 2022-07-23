import React from 'react';
import {Link} from "react-router-dom";
import { ThemeProvider } from 'styled-components'
import { BirthDateTheme } from "./BirthDateTheme";
import {Outlet} from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
function App() {
    const theme = { ...BirthDateTheme }
  return (

    <div className="App">
        <ThemeProvider theme={theme}>
            <Navigation />
            <Outlet />
        </ThemeProvider>
    </div>
  );
}

export default App;
