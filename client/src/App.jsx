import './App.css';
import Homepage from './components/homePage';
import { Route, Routes } from 'react-router-dom'
import RecipeDetail from './components/recipeDetail';
import Navbar from './components/navBar';

function App() {



  return (
    <main className=''>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />}></Route>
      </Routes>
    </main>
  )
}

export default App;
