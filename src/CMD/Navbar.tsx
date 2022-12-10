import Woff from '../assets/Wolf.jpg'
const Navbar = () => {
    return ( 
        <div className="h-[7vh] w-full px-1  flex items-center bg-white "  >
       <div style={{border:"border: 5px inset #141414"}}   className="flex items-center font-sm font-bold">
       <img src={Woff} alt="" className='h-[5vh]  ' /> 
       Start
       </div>
       
        </div>
     );
}
 
export default Navbar;