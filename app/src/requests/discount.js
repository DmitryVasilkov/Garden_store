// export const discount = (newDiscount, setResp) => {
//     fetch('http://localhost:3333/sale/send', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json;charset=utf-8'
//       },
//       body: JSON.stringify(newDiscount)
//     })
//     .then(res => res.json())
//     .then(json => setResp(json))
//   }



//   export  function createPhoneNumber(obj){
//     fetch('http://localhost:3333/sale/send', {
//         method: 'POST',
//         body: JSON.stringify(obj),
//         headers: {
//             'Content-Type': 'application/json;charset=utf-8'
//         }
//     })
//     .then(function(res){
//         return res.json()
//     })
//     .then(function(json){
//         console.log(json);
//     })
// }

// _________________________________

// export const addNewProduct = new_product => {
//   fetch('http://localhost:3333/sale/send', {
//     method: 'POST', 
//     body: JSON.stringify(new_product),
//     headers: {
//                   'Content-Type': 'application/json;charset=utf-8'
//               }
//   })
//       .then(res => res.json())
//       .then(json => console.log(json, 'new product added'))
// }

// __________________________________________


export const addSale = (new_Discount, setResp) => {
  // console.log(new_Discount);
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