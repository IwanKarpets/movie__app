import React,{createContext, useEffect,useState,useMemo} from 'react';

export const MovieContext = createContext();

const MovieProvider = (props) => {

   const [movies, setMovies] = useState([]);
   const [loading, setLoading] = useState(false);
   const [totalResult, setTotalResult] = useState(0);
   const [query, setQuery] = useState('Predator');
   const [currentPage, setCurrentPage] = useState(1);


   useEffect(() => {
       const fetchData = async()=>{
            setLoading(true)
            const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8&s=${query}&page=${currentPage}`);
            const data = await response.json();
            setMovies(data.Search);
            setTotalResult(data.totalResults);
            setLoading(false);
       }
       fetchData();
   }, [query,currentPage]);

  
    

const value=useMemo(() =>({movies, loading,totalResult,setQuery,query, setCurrentPage, currentPage}), [currentPage,movies,loading, query,totalResult]); 

    return (
        <MovieContext.Provider
            value={value}
        >
        {props.children}
        </MovieContext.Provider>
    );
};


export default MovieProvider;

