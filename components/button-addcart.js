import React from 'react';

export default class Buttonaddcart extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="flex-w bo5 of-hidden w-size17">
                <button
                    className="btn-num-product-down color1 flex-c-m size7 bg8 eff2"

                >
                    <i className='btn'>-</i>
                </button>
                <input
                    className="size8 m-text18 t-center num-product"
                    type="number"
                    name="num-product1"
                // value={product.quantity}
                // onChange={() => this.nhapSoluong(i, event.target.value)}

                />
                <button
                    className="btn-num-product-up color1 flex-c-m size7 bg8 eff2"
                // onClick={() => this.tangSoluong(i)}
                >
                    <i className='btn'>+</i>
                </button>
            </div>

        )
    }
}