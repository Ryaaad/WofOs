import dotted from './assets/lightAlt.svg'
import Navbar from './CMD/Navbar'
import Woff from './assets/Wolf.jpg'
import Element from './CMD/Element'
import {useDispatch,useSelector} from 'react-redux'
import { Bodyclicked } from './feature/main/mainSlice'
import Child from './CMD/Child'
function App() {
  const Dispatch=useDispatch()
  const {Items} = useSelector((state:any)=>state.main)
  console.log(Items);
  
  return (
   <div  className="font-['Fixedsys_Excelsior',monospace] overflow-hidden "   >
    <img src={Woff} alt=""  className='fixed z-[1] w-[200px] h-[200px] opacity-1 top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%]
     rounded-full   '  />

<div   className="w-full h-[93vh] relative bg-[#5757ff] " >
  <div style={{backgroundImage:`url(${dotted})` , backgroundSize:'50px'}}  
  className="w-full fixed z-[20] h-[93vh] bg-repeat content-start flex flex-col flex-wrap p-4 gap-3 gap-x-[30px] "
    // onClick={()=>Dispatch(Bodyclicked())} 
    >
   {Items.map((E: { action: string; title: string; img: number;clicked:boolean; children:{id: number;title: string;}[]; })=>{
    
 return (
  <div>
      <Element {...E} key={E.img} ></Element>
     {E.children.map((child,index)=>{
     if(child.id != 0)  return (
       <Child {...child} ></Child>
      )
        })}
  </div>

 
 );

   })}
  </div>
</div>
<Navbar></Navbar>

   </div>
  )
}

export default App
