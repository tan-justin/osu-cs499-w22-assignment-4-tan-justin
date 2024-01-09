/** @jsxImportSource @emotion/react */

import React from "react";
import { useDispatch } from "react-redux";
import {return_item} from '../Redux/action'
import {css, jsx} from "@emotion/react"

export function RemoveButton(id){

    const dispatch = useDispatch()
    const idHolder = id.id
    const idQuantity = id.quantity

    const buttonStyle = css`
        background-color: violet;
        color: snow;

    `

    return(
        <div>
            <button css={buttonStyle} onClick={()=>dispatch(return_item(idHolder, idQuantity))}>Remove From Cart</button>
        </div>
    )


}