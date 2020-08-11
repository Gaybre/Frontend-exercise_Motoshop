import { CategoriesData } from '../data/CategoriesData'
import { ProductsData } from '../data/ProductsData'

const SaleCatalog = `
<section class="SaleCatalog-section">
  <div class="SaleCatalog wrapper">
    <div class="SaleCatalog__categories">
      <h3>Categor&iacuteas</h3>
      <div class="SaleCatalog__categories-list">
      ${CategoriesData.map( item => `
          <div class="categorie">
            <p>
              ${ item.name }
            </p>
          </div>
        `).join('')
      }
      </div>
    </div>
    <div class="SaleCatalog__products">
      <h3>Art&iacuteculos m&aacutes vendidos</h3>
      <div class="SaleCatalog__products-list">
        <div class="SaleCatalog__products-list-search">
          <p>Ordenar por:</p>
          <input type="text">
        </div>
        <div class="SaleCatalog__products-list-items">
          ${
            ProductsData.map(item => `
              <div class="productCard">
                <p class="productCard__name">${ item.name }</p>
                <img 
                  src="${ item.img }" 
                  alt="${ item.name }"
                  class="productCard__img"
                >
                <div class="productCard__buy">
                  <button>Comprar</button>
                  <p>${ item.price } ₤</p>
                </div>
              </div>
            `).join('')
          }
        </div>
      </div>
      <hr />
      <div class="SaleCatalog__products-navigation">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>...</button>
          <button>Siguiente</button>
      </div>
    </div>
  </div>
</section>
`

export default SaleCatalog