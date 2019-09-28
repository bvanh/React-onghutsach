import React from 'react';
import Head from 'next/head';
import Menu from '../components/menu';
import Footer from '../components/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseDamage } from '@fortawesome/free-solid-svg-icons';
import Cart from '../components/cart/giohang'

export default function Giohang() {
    return (
        <div>
            <Head>
                <link rel="stylesheet" type="text/css" href="static/style/style-menu.css" />
                <link rel="stylesheet" type="text/css" href="static/style/style-giohang.css" />
                <link rel="stylesheet" type="text/css" href="static/style/style-btnaddcart.css" />
                <link rel="stylesheet" type="text/css" href="static/style/style-footer.css" />
                <title>Giỏ hàng</title>
            </Head>
            <header>
                <Menu />
                {/* caption */}
                <div className="caption text-center">
                    <h1>Giỏ hàng</h1>
                    <h3><FontAwesomeIcon icon={faHouseDamage} />Trang chủ / Sản phẩm / Giỏ hàng</h3>
                </div>
            </header>
            <section>
                <h2>Giỏ hàng của bạn</h2>
                <Cart />
            </section>
        </div>
    )
}