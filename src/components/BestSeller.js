import BestArticlesData from '../data/BestArticlesData'
import BestBrandData from '../data/BestBrandData'

const BestSeller = `
<section class="bestSeller-container">
  <div class="bestSeller wrapper">
    <div class="bestSeller__article">
      <h3>
        Art&iacuteculos detacados
      </h3>
      <div class="bestSeller__article-entry">
        ${ BestArticlesData.map( item => `
            <article>
              <img src="${ item.img || item.default }" alt="${ item.name }">
              <p>${ item.name }</p>
            </article>
          `).join('')
        }
      </div>
    </div>
    <div class="bestSeller__brand">
      <h3>
        Marcas m&aacutes vendidas
      </h3>
      <div class="bestSeller__brand-entry">
        <article>
          <img src="${ BestBrandData.img }" alt="marcas más vendidas">
          <p>${ BestBrandData.title }</p>
        </article>
      </div>
    </div>
  </div>
</section>
`
export default BestSeller