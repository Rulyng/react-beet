import { Box } from "../../component/box/Box"
import { User } from "../../data/Users"
import { CartShort } from "../../component/cart/Cart"
import { CartOrder } from "../../component/cart/Cart"


import './home.css'

export function Home(){
    const newCart = User.map(item => 
        <CartShort key={item.id} img={item.img} name={item.name} />
        ) 
        const newCartPend = User.map(item => 
        <CartShort key={item.id} className='cart-text-pend' img={item.img} name={item.description} />
        )
            const newCartOrder = User.map(item =>
                <CartOrder key={item.id} className='cart-item-order' img={item.img} data={item.data} shirtDescription={item.shirtDescription} price={item.price} />
                )

        

    return(
<div className="container home__container">
    <section className="nav">
<ul className="nav-list">
    <li>Dashbord</li>
    <li>Sales</li>
    <li>Catalog</li>
    <li>Custumers</li>
    <li>Reviews</li>
</ul>
    </section>

    <section className="main-sec">

<div className="box-row">
    <Box/>
    <Box/>
    </div>

    <img className="main-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL4r50UePI2RLYT5HuKwkGFhghhT5N_pwc1g&usqp=CAU" alt="" />
    <div className="main-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, laudantium dolorem. Placeat dolor dicta reprehenderit?</div>



<div className="main-cart">

    <h4 className="title">Pending orders</h4>

    <div className="cart-column">
{newCartOrder}
    </div>
</div>
    </section>

<section className="pending-sec">

<Box text="Pending reviews"/>

<div className="pending-cart">
{newCartPend}
</div>
</section>

<section className="new-custumers">

<Box text="New custumers"/>

    <div className="new-custumers-cart">
{newCart}
</div>

</section>

</div>
    )
}