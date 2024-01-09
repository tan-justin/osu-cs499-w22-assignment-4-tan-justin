/** @jsxImportSource @emotion/react */
import { connect } from 'react-redux';
import { css, jsx } from '@emotion/react'
import { Counter } from './Counter';


function DisplayItems({product}){

    const cardStyle = css`
      width: 36vw;
      height: 30vh;
      border: 10px groove lightskyblue;
      border-radius: 20px;
      display: flex;
      margin: 0;
      flex-wrap: wrap;
      flex-direction: column;
      align-items: center;
      color: indigo;
  
    `
    const bodyStyle = css`
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: space-evenly;
  
    `  
    const h1Size = css`
      font-size: 26px;
      font-style: bold;
    `
  
    const pSize = css`
      font-size: 18px;
      font-style: bold;
    `
    const imgPadding = css`
      padding-top: 5%;
      border-radius: 10px;
    `
  
    return(
      <div css={bodyStyle}>
        {product.map(products=>
        <div key={products.id} css={cardStyle}>
          <h1 css={h1Size}>{products.name}</h1>
          <p css={pSize}>Price per candy: ${(products.price).toFixed(2)}</p>
          <p css={pSize}>Stock: {products.inStock}</p>
          <Counter id={products.id} name={products.name} price={products.price} img={products.photoUrl} inStock={products.inStock}/>
          <img src={products.photoUrl} alt='penny candy' width='150px' height='150px' css={imgPadding}></img>
        </div>
        )}
      </div>
    )
  }

  const productArray =(state) => {
    return{
      product: state.candyStore.products,
    }
  }

  export default connect(productArray)(DisplayItems)