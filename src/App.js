/** @jsxImportSource @emotion/react */

import { Route, Routes, NavLink } from 'react-router-dom';
import DisplayItem from './Components/DisplayItem';
import { Global, css, jsx } from '@emotion/react';
import ShoppingCart from './Components/ShoppingCart'
import {React, useState, useEffect} from 'react';
import useProducts from './hooks/useProducts';
import { useDispatch } from 'react-redux';
import { receive_product } from './Redux/action';

const globalStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=Redressed&display=swap');
    body{
      font-family: 'Redressed', cursive;
      margin: 0;
    }
`;



function App() {

  const h1Style = css`
    color: snow;
    display: flex;
    justify-content: center;
    border: 12px solid Thistle;
    border-radius: 10px;
    padding: 20px;
    margin: 0;
    font-style: italic;
    font-size: 40px;
  `
  const backgroundStyle = css`
    background-color: PaleVioletRed;
    height: 350vh;
    width: 99vw;
    background-size: cover;
  `

  const {products, isLoading} = useProducts();
  const dispatch = useDispatch();

  useEffect(()=>{
    if(products)
      products.map((products)=> dispatch(receive_product(products))) 
  }, [products]);



  return (
    <div>
    <Global styles={globalStyle}/>
      <div css = {backgroundStyle}>
      <h1 css={h1Style}>PENNY CANDY STORE</h1>
      <Menu/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/DisplayItem' element={<DisplayItem/>}/>
        <Route path='/ShoppingCart' element={<ShoppingCart/>}/>
        <Route path='/*' element={<Error/>}/>
      </Routes>  
      </div>    
    </div>
  );
}

function Home(){
  const introStyle = css`
    color: snow;
    font-size: 60px;
    display: flex;
    justify-content: center;
    padding-top: 10vh;
  `
  return(
    <div css={introStyle}>
      Welcome to Penny Candy Store!
    </div>
  )

}

function Menu(){
  const navStyle = css`
    color: Thistle;
    display: flex;
    border: 10px solid Plum;
    font-size: 35px;
    justify-content: space-evenly;

    .active{
      color: RebeccaPurple;
      font-size: 40px;
    }
  `
  const linkStyle = css`
    color: Thistle;
    text-decoration: none;

    &:hover{
      font-size: 45px;
    }
  
  `

  return(
    <div css={navStyle}>
      <NavLink css={linkStyle} to='/'>Home</NavLink>
      <NavLink css={linkStyle} to='/DisplayItem'>Our Products</NavLink>
      <NavLink css={linkStyle} to='/ShoppingCart'>Checkout</NavLink>
    </div>
  );

}

function Error(){
  return(
    <div>
      <p>This page does not exist, please hit back or choose from the above options</p>
    </div>
  )
}



export default App;
