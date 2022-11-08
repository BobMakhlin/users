import './App.css';
import UserList from './components/User/UserList';

const DEFAULT_USERS = [
  {id: "17ef964b-23df-434d-b38e-dad7324719a9", name: "Max", age: 31},
  {id: "17ef964b-23df-434d-b38e-dad7324719a1", name: "Max", age: 31}
];

function App() {
  return (
    <div className="App">
      <UserList models={DEFAULT_USERS} />
    </div>
  );
}

export default App;
