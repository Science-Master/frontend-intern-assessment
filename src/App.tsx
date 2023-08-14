import './App.css'
import './index.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, RouteProps } from 'react-router-dom';
import ListProducts from './components/ListProducts';
import ProductDetails from './components/ProductDetails';
import Checkout from './components/Checkout';
import CheckoutSuccess from './components/CheckoutSuccess';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route<RouteProps> exact path="/" component={ListProducts} />
        <Route<RouteProps> path="/product/:id" component={ProductDetails} />
        <Route<RouteProps> path="/checkout" component={Checkout} />
        <Route<RouteProps> path="/checkout-success" component={CheckoutSuccess} />
      </Switch>
    </Router>
  );
};

export default App;
