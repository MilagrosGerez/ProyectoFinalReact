import { NavLink } from "react-router-dom";
import CartWidget from '../components/CartWidget';





function NavBar (){
    return (
   <header>
   <nav>
    <ul>
    <li>
      <NavLink to="/">Jazmín Aromas</NavLink>
    </li>
   
    <li>
      <NavLink to={"/products"}><button>Productos</button></NavLink>
    </li>
    <li>
      <NavLink to={"category/Florales"}><button>Aromas Florales</button></NavLink>
    </li>
    <li>
      <NavLink to={"category/Dulce"}><button>Aromas Dulces</button></NavLink>
    </li>
   </ul>
    </nav>
    <CartWidget/>
   </header>
    
    )
}

export default NavBar;