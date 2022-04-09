import React from 'react';
import { NavLink } from "react-router-dom";

class BtnExplore extends React.Component {
    render() {
        const { newExplore } = this.props // on définit un paramètre
        return (
            <>
                <div className='div-btn-explore'>
                    <NavLink exact="true" to="/destination">
                        <button className='btn-explore' onClick={newExplore}>Explore</button>
                    </NavLink>
                </div>
            </>
        );
    }
}


export default BtnExplore;