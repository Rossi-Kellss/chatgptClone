

import './App.css'
import Sidebar from './Sidebar/Sidebar'
import Home from './Home/Home'

function App() {
 

  return (
    <>
    {/* side and home containers */}
    <div className='flex'>
      <Sidebar/>
      <Home/>

    </div>
     
    </>
  )
}

export default App
