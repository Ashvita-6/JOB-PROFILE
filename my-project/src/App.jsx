import Navbar from './components/navbar';
import './App.css'
import {Outlet} from 'react-router-dom';

function App() {

  return (
    <>
    <Navbar />
     <Outlet />
<footer>footer</footer>
    </>
  )
}

export default App
