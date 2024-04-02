import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home';
import Profilo from './component/Profilo';
import Lavoro from './component/Lavoro';
import Messagistica from './component/Messagistica';
import Notifiche from './component/Notifiche';
import Rete from './component/Rete';

function App() {
  return (
    <div className='' >
      <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />}/>
        <Route path="/Lavoro" element={<Lavoro />}/>
        <Route path="/Messagistica" element={<Messagistica />}/>
        <Route path="/Notifiche" element={<Notifiche />}/>
        <Route path="/Rete" element={<Rete />}/>
        <Route path="/" element={<Profilo></Profilo>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
