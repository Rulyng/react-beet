import './cartUser.css'

export default function CartUser({item}){

    return(
        <>
        <div className="cart">
            <h5>Name: {item.name}</h5>
            <h6>Age: {item.age}</h6>
        </div>
        </>
    )
}