import React from 'react';
import {Link} from "react-router-dom";
import { ThemeProvider } from 'styled-components'
import { BirthDateTheme } from "./BirthDateTheme";
import {Outlet} from "react-router-dom";
function App() {
    const theme = { ...BirthDateTheme }
  return (

    <div className="App">
        <ThemeProvider theme={theme}>
            <nav>
                <Link to="/">Home</Link> |{" "}
                <Link to="Messages">Messages</Link>
            </nav>
            <Outlet />
        </ThemeProvider>
    </div>
  );
}

export default App;
