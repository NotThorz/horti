import './App.css';
import Home from'./Pages/Home'
import ProductSearch from'./Pages/ProductSearch'
import {Route,BrowserRouter as Router} from 'react-router-dom'
function App() {
  return (
    <Router>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/Products' component={ProductSearch}></Route>

    </Router>
  );
}

export default App;
