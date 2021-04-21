import React,{useContext} from 'react';
import Poster from './Poster/Poster';
import {MovieContext} from '../../context/MovieContext';
import './Main.css';
import { v4 as uuidv4 } from 'uuid';
import Loader from '../Loader.js/Loader';
import {createPages} from '../../utils/createPage';



const Main = () => {
    const {movies,loading, totalResult,query, setCurrentPage, currentPage} = useContext(MovieContext);

    let pagesCount = Math.ceil(totalResult/10);
    let pages = [];

    createPages(pages,pagesCount, currentPage);
    
    
    
    if(loading){
        return <Loader/>
    };
    return (
        <div className="main">
        {!movies ?   
        (<div class="error">Not found</div>)
            :
            (
             <>   
            <p className="result__founds">You searched for {query}, {totalResult} result found </p>
            <div className="posters">
                {movies.length && movies.map(movie=>{
                    return <Poster key={uuidv4()} movie={movie}/>
                })}
            </div>
            <div className="pages">
                {pages.map((page, index)=><span 
                    key={uuidv4()} 
                    className={currentPage===page ?"current-page":"page"}
                    onClick={()=>setCurrentPage(page)}
                    >{page}</span>)}
            </div>
            </>
            )}
        </div>
    )
}

export default Main;
