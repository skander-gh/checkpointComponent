
import './App.css';
import Photo from './component/profile/ProfilePhoto'
import Name from './component/profile/FullName'
import Add from './component/profile/Address'
function App() {
  return (
    <div className="App">
      <Photo/>
      <Name/>
      <Add/>
    </div>
  );
}

export default App;
