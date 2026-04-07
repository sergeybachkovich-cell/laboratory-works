import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Timetable from './pages/Timetable/Timetable';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          ,Route<Layout>
            <Home />
          </Layout>
        </Route>
       </Routes>
    </BrowserRouter>
        
  );
}

export default App;
