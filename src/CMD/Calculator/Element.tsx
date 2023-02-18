import { useDispatch } from "react-redux";
import { handelClick } from "../../feature/Calculator/CalcSlice";

interface props{
    value:string    
}


const Element:React.FC<props> = (props) => {
   
    const distpatch=useDispatch();

    return ( 
    <div style={{boxShadow:"rgb(0,0,0) 8px 8px 0px 0px"}} className=" border-solid border-[3px] text-3xl grid justify-center items-center font-semibold hover:text-white 
     hover:bg-black cursor-pointer border-black bg-white" 
     onClick={()=>distpatch(handelClick(props.value))}
     >
    {props.value}
    </div>  );
}
 
export default Element;