import { FaCocktail, FaReact } from "react-icons/fa";
import { Aik } from "react-icons/ai";
import { Link, useSearchParams } from "react-router-dom";
import { useRef, useState } from "react";
import '../styles/Header.css'

const Header = ({ term, searchKeyWord }) => {
    const [input, setInput] = useState();
    
    const inputRef = useRef();

    const getSearchTerm = () => {
        searchKeyWord(inputRef.current.value)
    }

    return ( 
        <div className="header">
            <Link>
            <FaCocktail />
            TastyGallery
            </Link>

            <div className='input'>
                    <input ref={inputRef} className="search" type="text" value={term} placeholder="Search Contact" onChange={getSearchTerm} />
            </div>
        </div>
     );
}
 
export default Header;