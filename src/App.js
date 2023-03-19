import './App.css';
import { Routes, Route } from 'react-router-dom';
import AppForm from './Components/AppForm';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={<AppForm />}></Route>
      </Routes>
    </div>
  );
}

export default App;
