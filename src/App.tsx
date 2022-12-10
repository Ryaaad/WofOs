import dotted from './assets/lightAlt.svg'
import Navbar from './CMD/Navbar'
import Woff from './assets/Wolf.jpg'
function App() {
 
  return (
   <div>
    <img src={Woff} alt=""  className='fixed w-[200px] h-[200px] opacity-10 top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] rounded-full   '  />
<Navbar></Navbar>
<div   className="w-full h-[95vh]  bg-slate-600 " >
  <div style={{backgroundImage:`url(${dotted})`}}  className="w-full h-[95vh] " >

  </div>
</div>
   </div>
  )
}

export default App
