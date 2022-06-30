import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import CompletedTask from './components/CompletedTask';
import Calender from './components/Calender';

function App() {
  return (
    <>
    <Navbar title="My Todo"></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/completedtasks' element={<CompletedTask></CompletedTask>}></Route>
        <Route path='/calender' element={<Calender></Calender>}></Route>
      </Routes>
    </>
  );
}

export default App;
