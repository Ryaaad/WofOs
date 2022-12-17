import { motion } from "framer-motion";

interface props{
    title:string,
    body:string,
    img?:number,
}

const Child:React.FC<props> = (props) => {
    return ( 
        <motion.div drag  dragMomentum={false} className="bg-black font-['Fixedsys_Excelsior',monospace] p-2 pt-1 w-[450px] z-30 h-[300px] 
        absolute rounded-md ">
          <div  className="flex text-xl font-bold items-center justify-center relative text-white rounded-top-md " > 
          <h1> {props.title} </h1>
          <div className="bg-white w-[25px] h-[25px] cursor-pointer absolute flex items-center justify-center top-[50%] text-2xl 
          translate-y-[-50%] right-[1%] text-black ">x</div>
          </div>
     <div className="bg-white w-full h-[90%] "></div>
        </motion.div> 
     );
}
 
export default Child;
