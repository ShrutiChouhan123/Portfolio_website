import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavigationPage from './NavigationPage';
import Home from './Components/Home';
import About from './Components/About';
import Resume from './Components/Resume';
import Services from './Components/Services';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
function App() {
  return (
  <>
  <NavigationPage/>
  <Routes>
    <Route exact path='/' element={<Home/>}></Route>
    <Route exact path='about' element={<About/>}></Route>
    <Route exact path='resume' element={<Resume/>}></Route>
    <Route exact path='services' element={<Services/>}></Route>
    <Route exact path='contact' element={<Contact/>}></Route>
  </Routes>
  <Footer/>
  </>
  );
}

export default App;
