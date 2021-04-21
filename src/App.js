import './App.css';
import Header from './components/Header/Header';
import Main from './components/Posters/Main';
import MovieProvider  from './context/MovieContext';

function App() {
  return (
    <MovieProvider>
      <div className="App">
          <Header/>
          <section>
            <Main/>
          </section>
      </div>
    </MovieProvider>
    
  );
}

export default App;
