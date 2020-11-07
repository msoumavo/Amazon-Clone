import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';

function Checkout() {

    const [{basket, user}, dispatch] = useStateValue();

    let substrIndex = user?.email.indexOf('@');
    let userId = user?.email.substr(0,substrIndex);
    // console.log('userId is: ', userId);

    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img className='checkout__ad' src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/CBCC_Jup_w2/ILM/ILM_640x45._CB417590250_.jpg" alt=""/>
                <div>
                    
                    <h3>Hello, {userId}</h3>
                    <h2 className="checkout__title">Your Shopping Basket</h2>

                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}

                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
