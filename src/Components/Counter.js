/** @jsxImportSource @emotion/react */

import {useState, useEffect, react} from 'react';
import {get_quantity, adj_quantity} from '../Redux/action';
import { useDispatch } from 'react-redux';
import { css, jsx } from '@emotion/react';


export function Counter(id, name, price, img, inStock){
    const formStyle = css`
        background-color: mediumpurple;
        display: flex;
        justify-content: space-evenly;
        border: 3px groove MediumOrchid;
        border-radius: 5px;
        color: snow;
    `
    const buttonStyle = css`
        background-color: violet;
        color: snow;

    `
    const fieldsetStyle = css`
        border-radius: 5px;
    `
    const inputStyle = css`
        border-radius: 7px;
    `

    const [quantity, setQuantity] = useState('');
    const dispatch = useDispatch();

    return(
      <form css={formStyle}
        onSubmit={(e)=>{
          e.preventDefault();
          dispatch(get_quantity(Number(quantity), id));
          dispatch(adj_quantity(Number(quantity), id, name, price, img));
        }}
      >
        <fieldset css={fieldsetStyle}>
          <input css={inputStyle} value={quantity} onChange = {(e)=>setQuantity(e.target.value)} placeholder = 'Enter Quantity Here'></input>
          <button css={buttonStyle} type="Submit">Add to Cart</button>
        </fieldset>
      </form>
    )
  
  }