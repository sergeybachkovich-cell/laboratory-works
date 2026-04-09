import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Timetable from './pages/Timetable/Timetable';

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home/>}></Route> 
          <Route path="timetable" element={<Timetable />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
