import React,{Component} from 'react';
//import { Button } from './Button';
import MenuItems from './MenuItems';
import './Navbar.css'
class Navbar extends Component {
    state ={
         cliked: false
        }
        handleClick = () =>{
            this.setState({ cliked: !this.state.cliked})
        }
    render() {
      
  
      return (
        <header>
          <nav className="navBar">
          <h1 className="navbarLogo">Flowers <i className="fab fa-pagelines"></i>   </h1>
          <div className="icon" onClick={this.handleClick}>
              <i className={this.state.cliked ? 'fas fa-times' : 'fas fa-bars'}> </i>
          </div>
              <ul className={this.state.cliked ? 'nav-menu active' : 'nav-menu'}>
                 
                  {MenuItems.map((item, index) =>{
                      return(
                  
                <li key={index}>
                    <a className={item.cName} href={item.path}>
                    {item.title}
                    </a>
                </li>)
    })}
              </ul>
            </nav>  
            
        </header>
      );
    }
  }
  
  export default Navbar;