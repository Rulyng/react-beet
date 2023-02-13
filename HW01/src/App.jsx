import Header from './common/header/Header'
import Footer from './common/footer/Footer'
import sharkImg from './img/shark.jpg'
import Button from './common/component/Button/Button'

import './style/main.scss'
import './style/about.scss'


function App(){
    return(
       <div className="wrapper">
        <Header/>
<section className='about'>
<div className="container about__container">
<div class="title about__title">About </div>
<div className="about__row">
   <div className="about__content">
    <p className='about__text'>
    Swim Across America - Carolina is a Team Relay charity swim scheduled for Saturday, October 7th. The event will take place in the Koury Natatorium at UNC Chapel Hill. People of all ages and skill levels who are passionate about fighting cancer are encouraged to participate in our second annual relay.
    </p>
    <Button className='about__btn' name='Send request'/>
   </div>
    
    <img className='about__image' src={sharkImg} alt="" />
</div>

</div>
</section>
        <Footer/>
       </div>
    )
}

export default App