import './App.css';
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';

function App() {
  return (
    <div className="App">
      <AddUser />
      <UsersList users = {[]}/>    
    </div>
  );
}

export default App;
