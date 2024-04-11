import './App.css';
import TVC_ClassComp from './components/TVC_ClassComp';
import TVC_FuncDemo from './components/TVC_FuncDemo';

function App() {

  // Khai báo biến đối tượng
  const users = {
    userName:"k22cnt3",
    password:"123456a@",
    fistName:"Trịnh Văn",
    lastName:"Chung"
  }

  // Khai báo đối tượng hàm
  function formatName(user){
    return <h2>Xin chào, {user.fistName} {user.lastName}</h2>;
  }
  return (
    <div className="App">
      {/* Biểu thức jsx  */}
      <div>
          <p> FullName: {users.fistName} {users.lastName}</p>
          {formatName(users)}
      </div>

      {/* Sử dụng functiono component  */}
      <div>
        <TVC_FuncDemo />
        {/* Sử dung Func_Comp có props  */}
        <TVC_FuncDemo userName="TVC" fullName="Trịnh Văn Chung" age="45" />
      </div>

      {/* Sử dụng class component  */}
      <div>
        {/* dùng không sử dụng props */}
        <TVC_ClassComp /> 
        {/* Sử dụng props  */}
        <TVC_ClassComp company="Fit-NTU - K22CNT3" course="ReactJs" />
        <TVC_ClassComp company="Fit-NTU - K22CNT4" course="ReactJs 1" />
        <TVC_ClassComp company="Fit-NTU - K22CNT3" course="ReactJs 2" />
        <TVC_ClassComp company="Fit-NTU - K22CNT6" course="ReactJs 3" />
      </div>
    </div>
  );
}

export default App;
