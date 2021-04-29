import './App.css';
import Navbar from './Navbar/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Components/Home';
import Contact from './Components/Contact';
import Gallery from './Components/Gallery';
import Example from './Components/Example';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/Example' exact component={Example}/>
          <Route path='/Gallery' exact component={Gallery} />
          <Route path='/Contact' exact component={Contact} />
        </Switch>
        <Footer />
    </Router>
    
  );
}

export default App;
