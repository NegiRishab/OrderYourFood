import React from 'react'
import classes from "./Header.module.css"
import HeaderCart from './HeaderCart'

export default function Header(props) {
  return (
    <div>
      
     <header className={classes.header}>
         <h1> React Meals</h1>
         <HeaderCart onClick={ props.OnShowcart}/>
     </header>
      <div className={classes['main-image']} >
          <img src="https://img.freepik.com/free-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000" alt="" />
      </div>
    </div>
  )
}
