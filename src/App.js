import logo from './logo.svg';
import './App.css';
import Head from './techsho/head';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './techsho/home';
import Mens from './techsho/mens';
import Womens from './techsho/womens';
import Kids from './techsho/kids';
import List from './techsho/list';




import Account from './techsho/profile'
import Sliders from './techsho/banner';
import Login from './techsho/login';






function App() {
  return (
    <div className="App">
      <Head/>
  
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<List/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Mens' element={<Mens/>}/>
        <Route path='/Womens' element={<Womens/>}/>
        <Route path='/Kids' element={<Kids/>}/>
        <Route path='/List' element={<List/>}/>
        <Route path='/Account' element={<Account/>}/>

        <Route path='/Login' element={<Login/>}/>
        
        <Route/>
      </Routes>
      </BrowserRouter>
    
      

    </div>
  );
}

export default App;
