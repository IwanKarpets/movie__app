import React,{useState, useContext} from 'react';
import {MovieContext} from '../../context/MovieContext';
import './Input.css';


const Input = () => {
    const {setQuery,setCurrentPage} = useContext(MovieContext);
    const [search, setSearch]= useState('');
    const handleSearch = (e)=>{
        e.preventDefault()
        setQuery(search)
        setCurrentPage(1)
    };
    return (
        <div>
            <form onSubmit={handleSearch}>
                    <input 
                        type="text"
                         placeholder="Enter the title of the movie"
                         value={search}
                         onChange={(e)=>setSearch(e.target.value)}
                         />
                </form>
        </div>
    )
};

export default Input;
