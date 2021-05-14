import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Bottombar from './components/Bottombar';
import Navbar from './components/Navbar.jsx';
import Categories from './containers/Categories';
import Home from './containers/Home';
import Product from './containers/Product.jsx';
import Products from './containers/Category';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/product/:id" component={Product} />
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/category/:category" component={Products} />
        </Switch>
      </Router>
      <Bottombar />
    </div>
  );
}

export default App;
