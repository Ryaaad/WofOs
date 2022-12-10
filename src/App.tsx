import dotted from './assets/lightAlt.svg'
import Navbar from './CMD/Navbar'
import Woff from './assets/Wolf.jpg'
function App() {
 
  return (
   <div  className="font-['Fixedsys_Excelsior',monospace] ">
    <img src={Woff} alt=""  className='fixed z-[1] w-[200px] h-[200px] opacity-1 top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] rounded-full   '  />

<div   className="w-full h-[93vh] relative bg-[#5757ff] " >
  <div style={{backgroundImage:`url(${dotted})` , backgroundSize:'50px'}}  className="w-full fixed z-[20] h-[93vh] bg-repeat  " >

  </div>
</div>
<Navbar></Navbar>
   </div>
  )
}

export default App
