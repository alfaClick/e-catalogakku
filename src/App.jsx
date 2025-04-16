import './style.css'
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Export from './pages/Export';
import FourWheels from './pages/FourWheels';
import Industry from './pages/Industry';
import TruckAndHeavyEquipment from './pages/TruckAndHeavyEquipment';
import TwoWheels from './pages/TwoWheels';

function App() {
  return (
    <div style={{fontFamily: 'Montserrat, sans-serif'}}>
     <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/product/export' element={<Export/>}/>
        <Route path='/product/four-wheels' element={<FourWheels/>}/>
        <Route path='/product/industry' element={<Industry/>}/>
        <Route path='/product/two-wheels' element={<TwoWheels/>}/>
        <Route path='/product/truck-and-heavy-equipment' element={<TruckAndHeavyEquipment/>}/>
     </Routes>
    </div>
  ) 
}   
 
export default App




