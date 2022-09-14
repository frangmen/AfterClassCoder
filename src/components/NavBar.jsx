import React from "react";
import CartWidget from "./CartWidget";
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <ul>
        <li>
          <Link to='/'><h1>Home</h1></Link>
        </li>
        <li>
         <Link to='categoria/1'><h1>Categoria 1</h1></Link>
        </li>
        <li>
        <Link to='categoria/2'><h1>Categoria 2</h1></Link>
        </li>
        <li>
         <CartWidget/>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
