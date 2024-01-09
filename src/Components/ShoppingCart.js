/** @jsxImportSource @emotion/react */

import {connect} from "react-redux"
import { RemoveButton } from "./RemoveButton"
import { css, jsx } from "@emotion/react"

export function ShoppingCart({cart}){
    const h1Style = css`
        font-size: 50px;
        color: MediumOrchid;
        border: 10px solid indigo;
        border-radius: 10px;
        background-color: LightPink;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30%;
        flex-direction: column;
        margin-left: 35%;
    `

    const cardStyle = css`
        background-color: LightPink;
        border-radius: 10px;
        border: 10px groove mediumpurple;
        color: MediumOrchid;
        font-style: bold;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 30%;
        padding: 20px;

    `
    const bodyStyle = css`
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: space-evenly;
  
    `  
    const h2Style = css`
        font-size: 25px;
    `
    const pStyle = css`
        font-size: 18px;
    `
    const imgStyle = css`
        border-radius: 10px;
        border: 5px solid orchid;
    `
    return(
      <div>
        <h1 css={h1Style} >Cart</h1>
        <div css={bodyStyle}>
        {cart.map((carts)=>
            <div css={cardStyle} key={carts.id}>
                <h1 css = {h2Style}>{carts.name}</h1>
                <p css ={pStyle}>Quantity: {carts.quantity}</p>
                <p css ={pStyle}>Total: ${(carts.quantity * carts.price).toFixed(2)} </p>
                <img src={carts.img} alt='Penny Candy' width='150px' height='150px' css={imgStyle}></img>
                <RemoveButton id={carts.id} quantity={carts.quantity}/>
            </div>
        )}
        </div>
      </div>
    )
}
  
const cartArray =(state)=>{
    return{
        cart: state.cartStore.cart,
    }
}

export default connect(cartArray)(ShoppingCart)