// import logo from './logo.png';
import './App.css';
import Class_PhanVuDuyAnh from './components/Class_PhanVuDuyAnh';
import Func_JSX_PhanVuDuyAnh from './components/Func_JSX_PhanVuDuyAnh';
function App() {
  return (
    <section className="App">
        <h1>Demo JSX</h1>
        {/* function component demo  */}
        <Func_JSX_PhanVuDuyAnh />
        <Func_JSX_PhanVuDuyAnh fullName="Pham Vu Duy EM" age="20" />

        <Class_PhanVuDuyAnh />
        <hr/>
        <Class_PhanVuDuyAnh info="Hoc ReactJS" time="11" />
    </section>
  );
}

export default App;
