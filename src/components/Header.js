import { logo } from '../assets/icons/logo'

const Header = `
  <section class="header">
    <div class="header-container wrapper">
      <div class="header__logo">
        <h1>MOTOSHOP </h1>
        ${ logo }
      </div>
      <nav class="header__nav">
        <a href="#" class="header__nav-option">Ayuda</a>
        <a href="#" class="header__nav-option">Nuestras tiendas</a>
        <a href="#" class="header__nav-option">Contacto</a>
        <a href="#" class="header__nav-menu">Menu</a>
        <div class="header__nav-submenu">
          <a href="#">Ayuda</a>
          <a href="#">Tiendas</a>
          <a href="#">Contacto</a>
        </div>
      </nav>
    </div>
  </section>
  `
export default Header