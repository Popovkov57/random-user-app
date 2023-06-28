import './App.css';
import UserList from './components/UserList';

function App() {
  return (
    <div className="App p-10">
      <h1 className='text-gray-700 text-4xl text-center'>Users list</h1>
      <UserList />
    </div>
  );
}

export default App;
