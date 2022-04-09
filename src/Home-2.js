import { React, useState } from 'react'
import { NavLink } from "react-router-dom";
import TextField from "@mui/material/TextField";
import SearchList from "./SearchBar";
import './Home-2.css';


function Home2() {

    const [inputText, setInputText] = useState("");

    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
        console.log('log 1', { lowerCase })
    };

    return (
        <>
            <div className='div-btn-home'>
                <NavLink exact="true" to="/">
                    <button className='btn-home' >Home 1.0</button>
                </NavLink>
            </div>
            <div className="home-2">
                <h3>Explore Space</h3>
                <div className="search">
                    <TextField
                        id="outlined-basic"
                        onChange={inputHandler}
                        variant="outlined"
                        fullWidth
                        label=""
                    />
                </div>
                <div className='div-list-search'>
                    <SearchList input={inputText} />
                </div>
            </div>
        </>
    );
}





export default Home2;