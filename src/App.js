
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SuperHeroesPage from './components/SuperHeroes.page';
import RQSuperHeroesPage from './components/RQSuperHeroes';
import HomePage from './components/Home.page';


 function App() {
  	return (
    	<Router>
      		<div>
        		<nav>
          			<ul>
            			<li>
              				<Link to="/">HomePage</Link>
            			</li>
            			<li>
              				<Link to="/super-heroes">Traditional Super Heroes</Link>
            			</li>
                  <li>
              				<Link to="/rq-super-heroes">RQ Super Heroes</Link>
            			</li>
          			</ul>
        		</nav>

        		<Routes>
                <Route path="/" element={<HomePage />} />
          			<Route path="/super-heroes" element={<SuperHeroesPage />} />
          			<Route path="/rq-super-heroes" element={<RQSuperHeroesPage />} />
        		</Routes>
      		</div>
    	</Router>
  	);
}


export default App;
