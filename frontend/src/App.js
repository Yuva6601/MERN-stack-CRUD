import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Error from './pages/Error';
import Create from './pages/Create';
import Delete from './pages/Delete';
import Update from './pages/Update';
import GetData from './pages/GetData';

function App() {
  return (
    <div className="App backGround bg-dark-1">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Error />} />
        <Route path='/create' element={<Create />} />
        <Route path='/delete/:id' element={<Delete />} />
        <Route path='/update/:id' element={<Update />} />
        <Route path='/getWorkout/:id' element={<GetData />} />
      </Routes>
    </div>
  );
}

export default App;
