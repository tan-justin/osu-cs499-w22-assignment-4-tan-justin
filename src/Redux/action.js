export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
export const RECEIVE_PRODUCT_STATUS = 'RECEIVE_PRODUCT_STATUS'
export const RECEIVE_MAP = 'RECEIVE_MAP'
export const CHECK_OUT = 'CHECK_OUT'
export const GET_QUANTITY = 'GET_QUANTITY'
export const ADJ_QUANTITY = 'ADJ_QUANTITY'
export const RETURN_ITEM = 'RETURN_ITEM'

export function receive_product_status(bool){
    return{
        type: RECEIVE_PRODUCT_STATUS,
        bool: bool,
    }
}

export function check_out(contents){
    return{
        type: CHECK_OUT,
        content: contents.content
    }

}

export function get_quantity(quantity, id){
    return{
        type: GET_QUANTITY,
        quantity: quantity,
        id: id
    }
}

export function adj_quantity(quantity, id, name, price, img){
    return{
        type: ADJ_QUANTITY,
        quantity: quantity,
        id: id,
        name: name,
        price: price,
        img: img
    }

}

export function receive_product(products){
    return{
        type: RECEIVE_PRODUCT,
        name: products.name,
        id: products.id,
        price: products.price,
        inStock: products.inStock,
        photoUrl: products.photoUrl
    }
}

export function return_item(id, quantity){
    return{
        type: RETURN_ITEM,
        id: id,
        quantity: quantity
    }

}