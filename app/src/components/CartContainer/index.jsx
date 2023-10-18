import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cart from '../Cart';
import s from './index.module.css'
import { useForm } from 'react-hook-form';
import empty_cart from "./empty_cart.jpg";
import toast from 'react-hot-toast';
import { firstOrder } from '../../requests/products';
import { clearAction } from '../../store/reducers/cartReducer';
import { useCart } from '../hooks/useCart';



export default function CartContainer() {

    const dispatch = useDispatch()

    const  cart_state = useSelector(state => state.cart)

    const filled_cart = useCart();

    // useEffect(() => {
    //     localStorage.setItem('cart', JSON.stringify(cart_state))
    //   }, [cart_state]);

    const [resp, setResp] = useState({});

    const {register, handleSubmit, reset, formState: {errors}} = useForm({mode: 'onBlur'});

    const numberRegexp = /^(?:\+491\d{10}|01\d{10})$/;

    const numberRegister = register('number', {
        required: '*Required field',
        pattern: {
        value: numberRegexp,
        message: '*Not a valid number format'
        }
    });

    const submit = newOrder => {
        reset();
        firstOrder(newOrder, setResp, toast.success('Your order has been placed!'));
        dispatch(clearAction(true))
      };

    const amountCart = filled_cart.reduce((acc, el) => acc + (el.discont_price ?? el.price) * el.count, 0).toFixed(2);

    
  return (

   
    
    <div className={s.cartContainerWrapper}>

                <div>
                    {
                        filled_cart.length === 0 ? (<img src={empty_cart} alt="empty_cart"/>) : cart_state.map(el => <Cart key={el.id} {...el} />)
                    }
                </div>

                {
                    cart_state.length === 0 
                    ? 
                    <div className={s.zeroAmountBlock}>{resp.status === 'OK' ? 'Your order has been placed!' : 'Cart is empty'}</div>
                    :
                    <div className={s.amountBlock}>
                        <p>Order details</p>
                        <div>
                            <p>Total:</p>
                            <p>
                                {amountCart} <span>$</span>{" "}
                            </p>
                        </div>
                        
                        <form onSubmit={handleSubmit(submit)}>
                            <p className={s.error_text}>{errors.number?.message}</p>
                            <input className={s.input} type="text" name='number' placeholder='Phone number' {...numberRegister} />
                            <button className={s.getDiscount}>{resp.status === 'OK' ? 'Your order has been placed!' : 'Place order'}</button>
                        </form>
                    </div>
                }    
                
    </div>

  )
}
