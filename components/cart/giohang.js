import React from 'react';
import { Table } from 'reactstrap';
import danhsach from '../data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Buttonaddcart from '../button-addcart';

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
        }
    }
    render() {
        const list = this.state.items;
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
                        {list[0].gia.toLocaleString()}
                    </td>
                    <td>
                        <Buttonaddcart />
                    </td>
                    <td>@mdo</td>
                </tr>
            </tbody>
        return (
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
        );
    }
}