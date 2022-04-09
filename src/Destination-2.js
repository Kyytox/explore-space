import React from 'react';
import Menu from './Navigation';
import BtnExplore from './BtnExplore';
import './Destination.css';
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'
import { destinations } from "./data";
import { NavLink, useParams, useLocation } from "react-router-dom";




function Destination2(props) {
    // on récup le param "id" envoyé en paramètre
    const { id } = useParams();
    console.log(id);
    console.log(destinations[id].name)

    return (
        <div className="destination">
            <Menu />
            <div className='description-destination'>
                <h1>{destinations[id].name}</h1>
                <div className='div-attributs'>
                    <p>
                        {destinations[id].description}
                    </p>
                </div>
                <div className='div-attributs'>
                    <h4>Distance</h4>
                    <p>
                        {destinations[id].distance}
                    </p>
                </div>
                {destinations[id].travel.length > 0 &&
                    <div className='div-attributs'>
                        <h4>Voyage</h4>
                        <p>
                            {destinations[id].travel}
                        </p>
                    </div>
                }
                <div className='div-attributs'>
                    <h4>Diamètre</h4>
                    <p>
                        {destinations[id].diamètre}
                    </p>
                </div>
                <div className='div-attributs'>
                    <h4>Révolution</h4>
                    <p>
                        {destinations[id].périodeRévolution}
                    </p>
                </div>
                <div className='div-attributs'>
                    <h4>Rotation</h4>
                    <p>
                        {destinations[id].rotation}
                    </p>
                </div>
                <Tippy content={<span style={{ fontSize: '20px' }}>{destinations[id].infoGravite}</span>}>
                    <div className='div-attributs'>
                        <h4>Gravité</h4>
                        <p>
                            {destinations[id].infoGravite}
                        </p>
                    </div>
                </Tippy>
                <div className='div-attributs'>
                    <h4>Atmosphère</h4>
                    <p>
                        {destinations[id].atmosphère}
                    </p>
                </div>
                <div className='div-attributs'>
                    <h4>Satellites</h4>
                    <p>

                        {destinations[id].satellites}
                    </p>
                </div>
                {destinations[id].températureMin.length > 0 &&
                    <div className='div-attributs'>
                        <h4>Température Minimum</h4>
                        <p>
                            {destinations[id].températureMin}
                        </p>
                    </div>
                }
                {destinations[id].températureMax.length > 0 &&
                    <div className='div-attributs'>
                        <h4>Température Maximum</h4>
                        <p>
                            {destinations[id].températureMax}
                        </p>
                    </div>
                }
                {destinations[id].températureMoy.length > 0 &&
                    <div className='div-attributs'>
                        <h4>Température Moyenne</h4>
                        <p>
                            {destinations[id].températureMoy}
                        </p>
                    </div>
                }

            </div>
            <div className='div-img-planete'>
                <img src={`${destinations[id].images}`} alt="planète" className='img-planete'></img>
            </div>
        </div >
    );
}



export default Destination2;