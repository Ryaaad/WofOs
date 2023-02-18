import { useSelector } from 'react-redux';
import dotted from '../../assets/lightAlt.svg'
import Element from './Element';


const Calculator = () => {

    const Resultat = useSelector((state:any)=>state.Calc.Resultat)
    return ( 
        <div style={{backgroundImage:`url(${dotted})` , backgroundSize:'150px'}} className='w-[300px] h-[400px] p-5 '  >
          <div className="bg-white border-solid border-[3px] w-[240px] mx-auto h-[50px] border-black text-3xl font-bold px-2 text-end overflow-hidden ">
           {Resultat}
          </div>
        <div className="grid grid-cols-[repeat(4,45px)] grid-rows-[repeat(5,45px)] gap-4 justify-center mt-4">
        <Element value='C'></Element>
        <Element value='E' ></Element>
        <Element value='<' ></Element>
        <Element value='*' ></Element>
        <Element value='7' ></Element>
        <Element value='8' ></Element>
        <Element value='9' ></Element>
        <Element value='/' ></Element>
        <Element value='4' ></Element>
        <Element value='5' ></Element>
        <Element value='6' ></Element>
        <Element value='-' ></Element>
        <Element value='1' ></Element>
        <Element value='2' ></Element>
        <Element value='3' ></Element>
        <Element value='+' ></Element>
        <Element value='0' ></Element>
        <Element  value='.' ></Element>
        <div style={{boxShadow:"rgb(0,0,0) 8px 8px 0px 0px"}} className="col-start-[-3] col-end-[-1] border-solid border-[3px] text-3xl grid justify-center items-center
         font-semibold  border-black bg-white cursor-pointer hover:text-white hover:bg-black "  >=</div>
        </div>


        </div>
     );
}
 
export default Calculator;