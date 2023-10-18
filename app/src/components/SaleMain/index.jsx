import React from 'react'
import { useSelector } from 'react-redux';
import Wrapper from '../UI/Wrapper';
import ProductsContainer from "../ProductsContainer";
import s from './index.module.css'

export default function SaleMain() {

    const products = useSelector(state => state.products);

   

    const products_with_discount = products.filter((el) => el.discont_price !== null)
                                           .filter((el) => el.show_product === true)
                                           .sort(() => Math.random() - 0.5)
                                           .slice(0, 4)

    // const get_random_products = () => {
    //   const shuffle_products = [...products].filter((el => el.discont_price !== null)).sort(() => Math.random() - 0.5);
    //   return shuffle_products.slice(0, 4)
    // } 
  
    // const random_products = get_random_products();


  return (
    <Wrapper>
        <p className={s.title}>Sale</p>
        <ProductsContainer products={products_with_discount}/>
    </Wrapper>
  )
}
