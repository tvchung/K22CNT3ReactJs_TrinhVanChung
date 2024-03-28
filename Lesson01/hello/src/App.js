import logo from './logo.png';
import './App.css';
import Tvc from './components/Tvc';

function App() {
  return (
    <section className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>TRƯỜNG ĐẠI HỌC NGUYỄN TRÃI</h2>
      </header>
      <div>
        <Tvc email="chungtrinhj@gmail.com" phone="0978611889"/>
        <Tvc email="chachvandoanh@gmail.com" phone="0912113113"/>
      </div>
    </section>
  );
}

export default App;
