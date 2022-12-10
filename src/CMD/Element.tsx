interface props{
    action:string,
    title:string,
    img:string
}

const Element:React.FC<props> = (props) => {
    return ( 
        <div>
       <img src={props.img} alt="" />
       <p> {props.title}</p>
        </div>
     );
}
 
export default Element;