import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { deletechild } from "../feature/main/mainSlice";
import Calculator from "./Calculator/Calcultor";

interface props{
    father_id:number,
    id:number,
    title:string,
}

const Child:React.FC<props> = (props) => {   
    const distpatch=useDispatch();
    return ( 
        <motion.div drag  dragMomentum={false} className="bg-black font-['Fixedsys_Excelsior',monospace] p-2 pt-1 w-max z-30 h-max
        absolute rounded-md ">
          <div  className="flex text-2xl font-bold items-center justify-center relative text-white rounded-top-md " > 
          <h1> {props.title} </h1>
          <div className="bg-white w-[26px] h-[26px] cursor-pointer absolute flex items-center justify-center top-[50%] text-2xl 
          translate-y-[-50%] right-[1%] text-black "   
          onClick={()=>{distpatch(deletechild([props.father_id,props.id]))}}
          >x</div>
          </div>
     <div className="bg-white w-full h-[90%] ">
        {props.title=='Calcultor'  &&    <Calculator></Calculator>}
  
     </div>
        </motion.div> 
     );
}
 
export default Child;
