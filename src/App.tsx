import './App.css';
import Greet from './components/Greet';
import PersonList from './components/PersonList';

function App() {

  const nameList = [
    { name: "saran", rollNo: 10 },
    { name: "manish", rollNo: 11 },
    { name: "Adip", rollNo: 12 }
  ]

  return (
    <div className="App">
      {/* we cannot give the name props a integer value now cause we specified it as an string in Greet.tsx  */}
      <Greet name="Saran" messageCount={10} hero={'hulk'}  />
      <PersonList name_list={nameList} />
    </div>
  );
}

export default App;
