import { Routes, Route } from 'react-router-dom';
import './App.css';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';
import NavBar from './components/NavBar';
import { Component } from 'react';

class App extends Component {

  render() {
    return (
      <>
        <NavBar />
        <div className="App p-10 bg-slate-100">
          <Routes>
            <Route path='/users' element={<UserList />}></Route>
            <Route path='/users/:userId' element={<UserDetails />}></Route>
          </Routes>
        </div>
      </>
    )
  }
}

export default App;
