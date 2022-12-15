import { motion } from "framer-motion";

interface props{
    title:string,
    body:string,
    img?:number,
}

const Child:React.FC<props> = (props) => {
    return ( 
        <motion.div className="bg-white w-[250px] h-[400px] ">
      <h1> {props.title} </h1>
        </motion.div>
     );
}
 
export default Child;
