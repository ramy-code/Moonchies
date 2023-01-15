import './App.css';
import Searchbar from './components/searchBar';
import { useState,useEffect } from 'react';

function App() {

  const [ingridients, setIngridients] = useState([])
  
  const search = (str) => {
    setIngridients( str.split(',').map((val)=>(val.trim())));
  }

  console.log(ingridients);
  useEffect(() => {
    
    return () => {
      
    };
  }, [ingridients]);

  return (
    <div className="App">
      <Searchbar search={search} />
    </div>
  );
}

export default App;
