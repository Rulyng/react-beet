import img1 from '../../img/cust.png'
import './box.css'

export function Box(props){
    return(
        <div className={`box ${props.className || ''}`}>
        <img className="box-img" src={img1} alt="" width={50} />
<p className="box-text">{props.text || "Lorem, ipsum dolor."}</p>
    </div>
    )
}