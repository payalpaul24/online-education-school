import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
	const total = cart.reduce((total, courseDetail) => total + courseDetail.price, 0);
    const discount = total * 0.15;
    const totalAmount = (total - Number(discount)).toFixed(2);
    
    const grandTotal = (num) => {
		const precision = num.toFixed(2);
		return Number(precision);
    };
    
    return (
        <div className="cart">
            <h3>Order Summary</h3>
            <small>Enrolled Courses: {cart.length}</small>
            <br/>
            <p>Total Price: ${grandTotal(total)}</p>
            <p>Discount Offer: ${grandTotal(discount)}</p>
            <h5>Total Amount: ${totalAmount}</h5>
        </div>
    );
};

export default Cart;