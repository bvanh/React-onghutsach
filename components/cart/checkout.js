import React from 'react';
import { Button } from 'reactstrap';



export default function Checkout(props){
    const {totalPrice,discount}=props
    return (
        <div className='total'>
            <p>Tạm tính: {totalPrice.toLocaleString()}vnđ</p>
            <p>Khuyến mãi: {discount.toLocaleString()}vnđ</p>
            <p>Tổng:{(totalPrice-discount).toLocaleString()}vnđ</p>
            <Button color="primary">Đặt hàng</Button>
        </div>
    )
}