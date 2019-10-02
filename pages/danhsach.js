import React from 'react';
import Head from 'next/head';
import Menu from '../components/menu';
import Footer from '../components/footer';
import Danhsachsanpham from '../components/danhsachsanpham'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseDamage } from '@fortawesome/free-solid-svg-icons';

export default function Danhsach() {
    return (
        <div>
            <Head>
                <link rel="stylesheet" type="text/css" href="static/style/style-menu.css" />
                <link rel="stylesheet" type="text/css" href="static/style/style-footer.css" />
                <link rel="stylesheet" type="text/css" href="static/style/style-danhsach.css" />
                <title>Sản Phẩm</title>
            </Head>
            <header>
                <Menu />
                {/* caption */}
                <div className="caption text-center">
                    <h1>Ống hút cỏ bàng</h1>
                    <p>Cỏ Bàng – Nơi sinh ta từ đất mẹ, xin được trở về với đất mẹ.Với mơ ước một ngày không rác nhựa, Việt Nam xanh trong mắt bạn bè Quốc Tế chúng tôi hân hạnh phân phối sỉ lẻ sản phẩm ống hút cỏ bàng hoàn toàn tự nhiên từ cây cỏ bàng.
                    </p>
                    <h3><FontAwesomeIcon icon={faHouseDamage} />Trang chủ / Sản phẩm / Ống hút cỏ</h3>
                </div>
            </header>
            <section>
                <div className="section1">
                    <h4>Hiện có 5 sản phẩm</h4>
                    <Danhsachsanpham />
                </div>
            </section>
            <Footer />
        </div>
    );
}