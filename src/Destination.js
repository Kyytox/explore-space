import React from 'react';
import Menu from './Navigation';
import BtnExplore from './BtnExplore';
import './Destination.css';
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'
import { destinations } from "./data";


var randomIndex = Math.floor(Math.random() * destinations.length);

class Destination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // on creer un nouvelle quote
            newDestination: {
                name: destinations[randomIndex].name,
                images: destinations[randomIndex].images,
                description: destinations[randomIndex].description,
                distance: destinations[randomIndex].distance,
                travel: destinations[randomIndex].travel,
                diamètre: destinations[randomIndex].diamètre,
                périodeRévolution: destinations[randomIndex].périodeRévolution,
                rotation: destinations[randomIndex].rotation,
                températureMoy: destinations[randomIndex].températureMoy,
                températureMin: destinations[randomIndex].températureMin,
                températureMax: destinations[randomIndex].températureMax,
                atmosphère: destinations[randomIndex].atmosphère,
                gravité: destinations[randomIndex].gravité,
                infoGravite: destinations[randomIndex].infoGravite,
                satellites: destinations[randomIndex].satellites,
            }
        }
        this.handleNewDestination = this.handleNewDestination.bind(this)
    }

    handleNewDestination() {
        randomIndex = Math.floor(Math.random() * destinations.length);
        let name = destinations[randomIndex].name;
        let images = destinations[randomIndex].images;
        let description = destinations[randomIndex].description;
        let distance = destinations[randomIndex].distance;
        let travel = destinations[randomIndex].travel;
        let diamètre = destinations[randomIndex].diamètre;
        let périodeRévolution = destinations[randomIndex].périodeRévolution;
        let rotation = destinations[randomIndex].rotation;
        let températureMoy = destinations[randomIndex].températureMoy;
        let températureMin = destinations[randomIndex].températureMin;
        let températureMax = destinations[randomIndex].températureMax;
        let atmosphère = destinations[randomIndex].atmosphère;
        let gravité = destinations[randomIndex].gravité;
        let infoGravite = destinations[randomIndex].infoGravite;
        let satellites = destinations[randomIndex].satellites;

        // on va mettre a jour les states pour une nex destination  
        this.setState({
            newDestination: {
                name: name,
                images: images,
                description: description,
                distance: distance,
                travel: travel,
                diamètre: diamètre,
                périodeRévolution: périodeRévolution,
                rotation: rotation,
                températureMoy: températureMoy,
                températureMin: températureMin,
                températureMax: températureMax,
                atmosphère: atmosphère,
                gravité: gravité,
                infoGravite: infoGravite,
                satellites: satellites,
            }
        });
    }

    render() {
        return (
            <div className="destination">
                <Menu />
                <div className='description-destination'>
                    <h1>{this.state.newDestination.name}</h1>
                    <div className='div-attributs'>
                        <p>
                            {this.state.newDestination.description}
                        </p>
                    </div>
                    <div className='div-attributs'>
                        <h4>Distance</h4>
                        <p>
                            {this.state.newDestination.distance}
                        </p>
                    </div>
                    {this.state.newDestination.travel.length > 0 &&
                        <div className='div-attributs'>
                            <h4>Voyage</h4>
                            <p>
                                {this.state.newDestination.travel}
                            </p>
                        </div>
                    }
                    <div className='div-attributs'>
                        <h4>Diamètre</h4>
                        <p>
                            {this.state.newDestination.diamètre}
                        </p>
                    </div>
                    <div className='div-attributs'>
                        <h4>Révolution</h4>
                        <p>
                            {this.state.newDestination.périodeRévolution}
                        </p>
                    </div>
                    <div className='div-attributs'>
                        <h4>Rotation</h4>
                        <p>
                            {this.state.newDestination.rotation}
                        </p>
                    </div>
                    <Tippy content={<span style={{ fontSize: '20px' }}>{this.state.newDestination.infoGravite}</span>}>
                        <div className='div-attributs'>
                            <h4>Gravité</h4>
                            <p>
                                {this.state.newDestination.gravité}
                            </p>
                        </div>
                    </Tippy>
                    <div className='div-attributs'>
                        <h4>Atmosphère</h4>
                        <p>
                            {this.state.newDestination.atmosphère}
                        </p>
                    </div>
                    <div className='div-attributs'>
                        <h4>Satellites</h4>
                        <p>
                            {this.state.newDestination.satellites}
                        </p>
                    </div>
                    {this.state.newDestination.températureMin.length > 0 &&
                        <div className='div-attributs'>
                            <h4>Température Minimum</h4>
                            <p>
                                {this.state.newDestination.températureMin}
                            </p>
                        </div>
                    }
                    {this.state.newDestination.températureMax.length > 0 &&
                        <div className='div-attributs'>
                            <h4>Température Maximum</h4>
                            <p>
                                {this.state.newDestination.températureMax}
                            </p>
                        </div>
                    }
                    {this.state.newDestination.températureMoy.length > 0 &&
                        <div className='div-attributs'>
                            <h4>Température Moyenne</h4>
                            <p>
                                {this.state.newDestination.températureMoy}
                            </p>
                        </div>
                    }

                    <BtnExplore newExplore={this.handleNewDestination} />
                </div>
                <div className='div-img-planete'>
                    <img src={`${this.state.newDestination.images}`} alt="planète" className='img-planete'></img>
                </div>
            </div >
        );
    }
}


export default Destination;