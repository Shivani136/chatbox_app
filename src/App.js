import logo from './logo.svg';
import './App.css';import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header';
import SelfLearning from './Component/SelfLearning';
import Banner from './Component/Banner';
// import { Button } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
    
    {/* <h1>hello</h1> */}
    <Header />
    <Banner />
    </div>
  );
}

export default App;
