import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import MyFaculty from './pages/MyFaculty/MyFaculty';
import MyGroup from './pages/MyGroup/MyGroup';
import Timetable from './pages/Timetable/Timetable';
import ExamsTable from './pages/ExamsTable/ExamsTable'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home/>}></Route> 
          <Route path="myfaculty" element={<MyFaculty/>}></Route>
          <Route path="mygroup" element={<MyGroup/>}></Route>
          <Route path="timetable" element={<Timetable />}></Route>
          <Route path="examstable" element={<ExamsTable/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
