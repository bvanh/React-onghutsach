import React from 'react';
import { Table } from 'reactstrap';
import danhsach from '../data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Coupon from '../cart/coupon';
import Checkout from '../cart/checkout'

function Rating(props) {
    let rater = [];
    for (let i = 0; i < props.value; i++) {
        rater.push(<FontAwesomeIcon key={i} icon={faStar} />)
    }
    return rater;
}
export default class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: danhsach.items,
            voucher: danhsach.voucher,
            codefake: danhsach.codefake,
            khuyenmai: danhsach.khuyenmai,
        }
    }
    nhapSoluong(value) {
        const list = this.state.items;
        list[0].quality = value;
        if (value <= 0) {
            value = 1;
        } else
            if (value > 10) {
                return;
            }
        this.setState({
            items: list
        })
    }
    tangSoluong() {
        const list = this.state.items;
        list[0].quality++;
        if (list[0].quality > 10) {
            list[0].quality = 10;
        }
        this.setState({
            items: list
        })
    }
    giamSoluong() {
        const list = this.state.items;
        list[0].quality--;
        if (list[0].quality <= 1) {
            list[0].quality = 1;
        }
        this.setState({
            items: list
        })

    }
    inputCode(val) {
        this.setState({
            codefake: val.target.value
        })
        console.log(this.state.codefake)
    }
    appCoupon() {
        const { voucher, khuyenmai, codefake } = this.state;
        const validCoupon = voucher.filter(item => item.code === codefake)
        if (validCoupon.length === 1) {
            this.setState({
                khuyenmai: validCoupon[0].value,
            })
        } else {
            this.setState({
                khuyenmai: 0,
            })
            console.log('SAI CODE')

        }
    }
    render() {
        const list = this.state.items;
        const { voucher, khuyenmai, codefake } = this.state;
        const totalPrice = list[0].quality * list[0].gia;
        const printList =
            <tbody>
                <tr>
                    <th scope="row">
                        <div className='img-product'>
                            <img src={list[0].src} alt={list[0].caption} />
                        </div>
                    </th>
                    <td>
                        <h6>{list[0].ten}</h6>
                        <Rating
                            value={list[0].danhgia}
                        /><br />
                        <FontAwesomeIcon icon={faTrash} />
                    </td>
                    <td>
                        {list[0].gia.toLocaleString()}vnđ
                    </td>
                    <td>
                        <div className="flex-w bo5 of-hidden w-size17">
                            <button
                                className="btn-num-product-down color1 flex-c-m size7 bg8 eff2"
                                onClick={() => this.giamSoluong()}
                            >
                                <i className='btn'>-</i>
                            </button>
                            <input
                                className="size8 m-text18 t-center num-product"
                                type="number"
                                name="num-product1"
                                value={list[0].quality}
                                onChange={() => this.nhapSoluong(event.target.value)}

                            />
                            <button
                                className="btn-num-product-up color1 flex-c-m size7 bg8 eff2"
                                onClick={() => this.tangSoluong()}
                            >
                                <i className='btn'>+</i>
                            </button>
                        </div>

                    </td>
                    <td>
                        {totalPrice.toLocaleString()}vnđ
                    </td>
                </tr>
            </tbody>
        return (
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Sản phẩm</th>
                            <th>Giá</th>
                            <th>Số lượng</th>
                            <th>Tạm tính</th>
                        </tr>
                    </thead>
                    {printList}
                </Table>
                <div className='checkout'>
                    <Coupon
                        codefake={codefake}
                        appCoupon={this.appCoupon.bind(this)}
                        inputCode={this.inputCode.bind(this)}
                    />
                    <Checkout
                        totalPrice={totalPrice}
                        discount={khuyenmai}
                    />
                </div>
            </div>
        );
    }
}