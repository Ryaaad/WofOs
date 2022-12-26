import Calculator from "../assets/calculator.svg";
import Clock from "../assets/watch.svg";
import terminal from "../assets/terminal.png";
import nav from "../assets/Nav.svg"
import trash from "../assets/trash.png"
import { motion } from "framer-motion";
import {useDispatch,useSelector} from 'react-redux'
import { Eclicked,Addchild } from "../feature/main/mainSlice";
interface props{
    action:string,
    title:string,
    img:number,
    clicked: boolean
}

const Element:React.FC<props> = (props) => {
    let img=[Calculator,Clock,terminal,nav,trash,trash];
    const Dispatch=useDispatch()
    return ( 
        <motion.div drag  dragMomentum={false} onClick={()=>Dispatch(Eclicked(props.img))}  onDoubleClick={()=>Dispatch(Addchild(props.img))}
        className={ `font-bold ${props.clicked && "bg-black text-white"} flex flex-col p-2 cursor-pointer justify-center w-[90px] 
        items-center  text-center `}    >
       <img src={img[props.img]} alt="" draggable="false" className="w-[60px] h-[60px]  "/>
       <p className="w-[80px]"  > {props.title}</p>
        </motion.div>
     );
}
 
export default Element;