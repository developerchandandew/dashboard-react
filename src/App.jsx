import './App.css'
import SideBar from './component/sidebar/SideBar';
import Report from './component/Report.jsx/Report';

function App() {

  return (
    <div className="app w-full h-full flex">
        <SideBar></SideBar>
         <Report/> 
      
    </div>    
  )
}

export default App
