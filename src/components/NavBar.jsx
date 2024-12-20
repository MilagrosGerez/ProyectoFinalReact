import { NavLink } from "react-router-dom";
import CartWidget from '../components/CartWidget';





function NavBar (){
    return (
   <header>
   <nav>
    <ul>
    <li>
      <NavLink  to="/">Jazmín Aromas</NavLink>
    </li>
   
    <li>
      <NavLink to={"/category/DeAutos"}><button>Difusores para autos</button></NavLink>
    </li>
    <li>
      <NavLink to={"/category/Florales"}><button>Aromas Florales</button></NavLink>
    </li>
    <li>
      <NavLink to={"/category/Dulce"}><button>Aromas Dulces</button></NavLink>
    </li>
    <CartWidget/>
   </ul>
    </nav>
   </header>
    
    )
}

export default NavBar;