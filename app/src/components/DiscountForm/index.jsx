import React, { useState } from "react";
import s from "./index.module.css";
import img from './gnome111.png'
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { addSale } from "../../requests/products";


export default function DiscountForm() {

  const [resp, setResp] = useState({});

  const {register, handleSubmit, formState: { errors }, reset} = useForm({mode: "onBlur"});

  const submit = new_product_obj => {
    reset();
    addSale(new_product_obj, setResp, toast.success('5% discount has been received!'));
  };


  const numberRegexp = /^(?:\+491\d{10}|01\d{10})$/;

  const numberRegister = register('number', {
    required: '*Required field',
    pattern: {
      value: numberRegexp,
      message: '*Not a valid number format'
    }
  });


    return (
        // <div className={s.wrapper}>
        //     <img src={img} alt="" />
        //     <div className={s.form}>
        //         <h2>5% off</h2>
        //         <h3>on the first order</h3>
        //         <form onSubmit={handleSubmit(submit)}>
        //             <p className={s.error_text}>{errors.number?.message}</p>
        //             <Input
        //                 defaultValue={"+4916094630015"}
        //                 type="text"
        //                 placeholder="Enter your phone number"
        //                 register={register("phone", {
        //                     required: "*required",
        //                     pattern: {
        //                         value: /^(?:\+49|0)[1-9]\d{6,14}$/,
        //                         message: "Enter a valid German number",
        //                     },
        //                 })}
            
        //             />

        //             <button>{resp.status === 'OK' ? 'Discount has been received' : 'Get a discount'}</button>
        //         </form>
        //     </div>
        // </div>

        <div className={s.wrapper}>
          <img src={img} alt="gnome" />
          <div className={s.form}>
              <h2>5% off</h2>
              <h3>on the first order</h3>
              <form onSubmit={handleSubmit(submit)}>
                <p className={s.error_text}>{errors.number?.message}</p>
                {
                  resp.status === 'OK' ? <input className={s.input} type="text" name='number' placeholder='+49' {...numberRegister} style={{ display: 'none' }}/> 
                                       : <input className={s.input} type="text" name='number' placeholder='+49' {...numberRegister}/>
                }
                <button className={s.getDiscount}>{resp.status === 'OK' ? 'Discount has been received' : 'Get a discount'}</button>
              </form>
          </div>
        </div>
    );
}




// import React, { useState } from "react";
// import s from "./index.module.css";
// import img from "./gnom.png";


// import { useForm } from "react-hook-form";
// import { useDispatch } from "react-redux";
// import Input from "../UI/Input";

// export default function Gnome() {
//     const dispatch = useDispatch();
    
//     const resp = useState({ status: "loading", data: { status: "loading" } })

//     const {register, handleSubmit, formState: { errors }} = useForm();

//     const handler = (data) => {dispatch(postDiscount(data))};

//     return (
//         <div className={s.wrapper}>
//             <img src={img} alt="" />
//             <div className={s.formBlock}>
//                 <h2>5% off</h2>
//                 <h3>on the first order</h3>
//                 <form onSubmit={handleSubmit(handler)}>
//                     <Input
//                         defaultValue={"+492115684962"}
//                         type="text"
//                         placeholder="Enter your phone number"
//                         register={register("phoneNum", {
//                             required: "*required",
//                             pattern: {
//                                 value: /^(?:\+49|0)[1-9]\d{6,14}$/,
//                                 message: "Enter a valid German number",
//                             },
//                         })}
//                         errors={errors}
//                     />

//                     <button className={"getDiscount"}>{resp.data.status === "OK" ? "Discount has been received" : "Get a discount"}</button>
//                 </form>
//             </div>
//         </div>
//     );
// }