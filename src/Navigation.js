import React from 'react';
import { NavLink } from "react-router-dom";



class Menu extends React.Component {
    render() {
        const style = {
            color: 'white',
            textDecoration: 'none',
            verticalAlign: 'middle',
            fontSize: '20px',
        }
        return (
            <div id="Menu">
                <div className="section-menu">
                    <NavLink exact="true" to="/" style={style}>
                        1. Acceuil
                    </NavLink>
                </div>
                <div className="section-menu">
                    <NavLink exact="true" to="/destination" style={style} >
                        2. Destination
                    </NavLink>
                </div>
            </div>
        )
    }
}

export default Menu;