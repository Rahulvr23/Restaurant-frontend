
import './App.css';
import AllRest from './Components/AllRest';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';
import ViewRest from './Components/ViewRest';

function App() {
  return (
    <div className="App">
      <header><Header/></header>
<section>
<Routes>
  <Route path='/'element={<AllRest/>}/>
<Route path='/view/:id' element={<ViewRest/> }/>
</Routes>
</section>


    <footer><Footer/></footer>
    </div>
  );
}

export default App;
