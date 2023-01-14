import './App.css';
import Searchbar from './components/searchBar';
import { useState } from 'react';

function App() {

  const [ingridients, setIngridients] = useState([])
  
  const search = (str) => {
    setIngridients(str.split(','));
    console.log(ingridients);
  }

  return (
    <div className="App">
      <Searchbar search={search} />
    </div>
  );
}

export default App;
