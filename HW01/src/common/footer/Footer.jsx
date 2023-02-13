
import Button from '../component/Button/Button'
import './footer.scss'

function Footer (){
    return(
        <div className="footer">
            <div className="container footer__container">
            <div class="title footer__title">Contacts</div>
            <Button className='footer__btn' name='Send massage'/>
            <div className="footer__row">
                  <div class="footer__content">
                    <a class="h6 footer__contact" href="tel:2395550108">(239) 555-0108</a>
                    <a class="h6 footer__contact" href="mailto:tanya.hill@example.com">tanya.hill@example.com</a>
                </div>
                <ul className='footer__social-row'>
<li>Facebook</li>
<li>Instagram</li>
<li>Site</li>
                </ul>
            </div>
          
            </div>
        </div>
    )
}

export default Footer