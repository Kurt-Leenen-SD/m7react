import { HashRouter, Link, Routes, Route } from 'react-router-dom'
import { Article } from './comps/Article'
import { Props } from './comps/props'
import { CookieClicker } from './comps/Cookie'
import { GetCat as Cat } from './comps/Cat'
import Pokeapi from './comps/Pokeapi'
import Top10 from './comps/Top10'
import './App.css'

function App() {
  return (
    <HashRouter>
      <header>
        <nav>
          <ul id="navBar">
            <li>
              <Link to="/Article">Article</Link>
            </li>
            <li>
              <Link to="/Props">Props</Link>
            </li>
            <li>
              <Link to="/Cookie">Cookie</Link>
            </li>
            <li>
              <Link to="/Top10">Top10</Link>
            </li>
            <li>
              <Link to="/Cat">Cat</Link>
            </li>
            <li>
              <Link to="/Pokeapi">Pokeapi</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/Article" element={<Article />} />
        <Route path="/Props" element={<Props />} />
        <Route path="/Cookie" element={<CookieClicker />} />
        <Route path="/Top10" element={<Top10 />} />
        <Route path="/Cat" element={<Cat />} />
        <Route path="/Pokeapi" element={<Pokeapi />} />
      </Routes>
    </HashRouter>
  )
}

export default App
