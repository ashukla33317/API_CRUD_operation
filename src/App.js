import React from 'react';
import './App.css';
import '../src/index.css';
import { Route,Routes } from 'react-router-dom';
import Home from './Home';
import AddUser from './Adduser';
import UpdateUser from './UpdateUser';

const App = () => {
  return (
    <> 
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='add' element={<AddUser/>}/>
        <Route path='update' element={<UpdateUser/>}/>
    </Routes>

    </>
  )
}

export default App