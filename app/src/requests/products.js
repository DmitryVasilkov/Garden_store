import { getAllProductsAction } from "../store/reducers/productsReducer"


export const getAllProducts = (dispatch) => {
  fetch(`http://localhost:3333/products/all`)
      .then(res => res.json())
      .then(json => dispatch(getAllProductsAction(json)))
}

 export const addSale = (new_Discount, setResp) => {
    fetch('http://localhost:3333/sale/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(new_Discount)
    })
    .then(res => res.json())
    .then(json => setResp(json))
  }

  export const firstOrder = (newOrder, setResp) => {
    fetch('http://localhost:3333/order/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(newOrder)
    })
    .then(res => res.json())
    .then(json => setResp(json))
  }
