import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from './logo.png'
import s from './index.module.css'
import Wrapper from '../UI/Wrapper'
import Search from '../Search'
import { useCart } from '../hooks/useCart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'

export default function Nav() {

    const classFunction = ({isActive}) => isActive ? s.active : '';

    const product_quantity = useCart().reduce((acc) => acc + 1, 0);

  return (
      <header>
            <nav className={s.header} >
                <Wrapper className={s.nav}>
                <div className={s.first}>
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                    
                    <Link className={s.link} to="/categories">
                        <button className={s.navButton}>Categories</button> 
                    </Link>

                    <Search/>
                    
                </div>

                <div className={s.second}>

                    <div className={s.links}>
                        <NavLink className={classFunction} to="/">Main Page</NavLink>
                        <NavLink className={classFunction} to="/products">All products</NavLink>
                        <NavLink className={classFunction} to="/sales">All Sale</NavLink>
                        <NavLink className={classFunction} to="./searched_products">Search</NavLink>
                    </div>

                    {/* <ul className={[s.links, "headerMenuLinks"].join(" ")}>
                        <li>
                            <NavLink to="/">Main Page</NavLink>
                        </li>
                        <li>
                            <NavLink to="/products">All products</NavLink>
                        </li>
                        <li>
                            <NavLink to="/sales">All Sale</NavLink>
                        </li>
                        <li>
                            <NavLink to="./searched_products">Search</NavLink>
                        </li>
                    </ul> */}

                    <Link to="./cart">
                        {!product_quantity > 0 || <p className={s.product_quantity}>{product_quantity}</p>}
                        {/* <LiaShoppingBagSolid /> */}
                        <div className={s.iconomic}>
                        <FontAwesomeIcon icon={faBasketShopping} bounce style={{color: "#00ff2a",}} />
                        </div>
                    </Link>

                </div>
              
            </Wrapper>
            </nav>
        </header>
           
            
        
  )
}



// import React from 'react'
// import { Link } from 'react-router-dom'
// import s from './index.module.css'

// export default function NavMenu() {
//   return (
//     <div className={s.nav_menu}>
//       <Link to='/'>Main</Link>
//       <Link to='/categories'>All Categories</Link>
//       <Link to='/products'>All Products</Link>
//       <Link to='/cart'>Cart</Link>
//     </div>
//   )
// }