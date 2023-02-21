import './cart-short.css'


export function CartShort(props){
    return(
        <div key={props.id} className="cart-item">
            <img className="cart-img" src={props.img} alt="" width={30}/>
            <p className={`cart-text ${props.className || ""}`}>{props.name}</p>
        </div>
    )
}

export function CartOrder (props){
    return(
        <div key={props.id} className={`cart-item ${props.className || ""}`}>
<div className="main-part-cart">
    <img className='cart-img' src={props.img} alt="" width={30}/>
    <div className="cart-content">
        <p>{props.data}</p>
        <p>{props.shirtDescription}</p>
        </div>
    </div>
    <div className="cart-price">{props.price}</div>

        </div>
    )
}