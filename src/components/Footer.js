import { twitter } from '../assets/icons/twitter'
import { facebook } from '../assets/icons/facebook'
import { ssr } from '../assets/icons/ssr'

const Footer = `
<section class="footer-container">
  <div class="footer wrapper">
    <div class="footer__moreInfo">
      <a href="#">Av&iacuteso legal</a>
      <a href="#">Polit&iacuteca de privacidad</a>
      <a href="#">Gastos de env&iacuteo</a>
      <a href="#">Sistemas de pago</a>
      <a href="#">Plazos de entrega</a>
      <a href="#">Devoluciones</a>
    </div>
    <div class="footer__socialMedia">
      <a href="#"><span>${ twitter }</span></a>
      <a href="#"><span>${ facebook }</span></a>
      <a href="#"><span>${ ssr }</span></a>
    </div>
  </div>
</section>
`
export default Footer