import { React } from 'react'
import { destinations } from "./data"
import { Link } from "react-router-dom";



function SearchList(props) {
    //create a new array by filtering the original array
    const filteredData = destinations.filter((el) => {
        //if no input the return the original
        if (props.input === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.name.toLowerCase().includes(props.input)
        }
    })
    return (
        filteredData.map((item) => (
            <>
                <div className='items-serach' key={item.id}>
                    {/* faire un lien vers la page destination 2 avec en paramètre l'id de la planètre pour afficher ces caracteristiques  */}
                    <Link to={`/destination2/${item.id}`}>
                        <h3>{item.name}</h3>
                        <img src={`${item.images}`} alt="planète" className='img-search-list'></img>
                    </Link>
                </div >
            </>
        ))
    )
}

export default SearchList