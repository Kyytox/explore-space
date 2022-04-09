import React from 'react';
import Menu from './Navigation';
import BtnExplore from './BtnExplore';
import './Home.css';
import { NavLink } from "react-router-dom";



function Home1() {
    return (
        <>
            <Menu />
            <div className='div-btn-home'>
                <NavLink exact="true" to="/home-2">
                    <button className='btn-home'>Home 2.0</button>
                </NavLink>
            </div>

            <div className="home">
                {<div className='btn-explore-home'>
                    <BtnExplore />
                </div>}
            </div>
        </>
    );
}





export default Home1;