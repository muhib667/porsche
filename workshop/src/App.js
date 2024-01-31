
import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Card';
import Card1 from './components/Card1';
import Card2 from './components/Card2';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Card/>
      <Card1/>
      <Card2/>
    </div>
  );
}

export default App;
