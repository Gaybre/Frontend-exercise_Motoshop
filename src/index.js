import Header from './components/Header'
import Home from './pages/Home'

const loadPage = async () => {
  const container = null || document.getElementById('main')
  container.innerHTML = await Home()
}

window.addEventListener('load', loadPage)