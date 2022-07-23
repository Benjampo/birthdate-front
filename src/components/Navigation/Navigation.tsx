import React from 'react';
import {NavLink} from "react-router-dom";
import {NavigationBar, NavItem} from "./styles";

function Navigation() {
    return (
        <NavigationBar>
            <nav>
                <ul>
                    <li>
                        <NavItem to="/">Home</NavItem> |{" "}
                    </li>
                    <li>
                        <NavItem to="calendar">Calendar</NavItem>
                    </li>
                    <li>
                        <NavItem to="messages">Messages</NavItem>
                    </li>
                    <li>
                        <NavItem to="settings">Settings</NavItem>
                    </li>

                </ul>
            </nav>
        </NavigationBar>
    );
}

export default Navigation;
