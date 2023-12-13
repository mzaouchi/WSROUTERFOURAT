import { useState } from 'react';
import './App.css';
import ListUsers from './Components/ListUsers';
import NavUser from './Components/NavUser';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Profil from './Components/Profil';

function App() {
  const [users,setUsers] = useState([
    {name : "Fourat",age : 19, image : "https://gomycodelearndev.blob.core.windows.net/profiles/f8438611-4344-4d1a-a03b-8fcfc91e4413-133407968975100061.jpeg",id : Math.random()},
    {name : "Amine",age : 20, image : "https://gomycodelearndev.blob.core.windows.net/profiles/98bdcd2b-5fe5-4d5e-92a0-dfdaccb351eb-133407944633564858.png", id : Math.random()},
    {name : "Dali Flower",age : 21, image : "https://static.pexels.com/photos/36753/flower-purple-lical-blosso.jpg", id : Math.random()}  
  ])
  return (
    <div>

      <NavUser/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Users' element={<ListUsers users={users}/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Profil/:id' element={<Profil users={users}/>}/>
      </Routes>
    </div>
  );
}

export default App;
