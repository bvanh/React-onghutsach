import React from 'react';
import Head from 'next/head';
import Menu from '../components/menu';
import Footer from '../components/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseDamage } from '@fortawesome/free-solid-svg-icons';
import Showimage from '../components/detail-image';
import Chitietsanpham from '../components/detail-text';
import Buttonaddcart from '../components/button-addcart';
import Motasanpham from '../components/motasanpham';
import Danhsachsanpham from '../components/danhsachsanpham'

export default function Chitiet() {
    return (
        <div>
            <Head>
                <link rel="stylesheet" type="text/css" href="static/style/style-menu.css" />
                <link rel="stylesheet" type="text/css" href="static/style/style-chitiet.css" />
                <link rel="stylesheet" type="text/css" href="static/style/style-footer.css" />
                <link rel="stylesheet" type="text/css" href="static/style/style-showimage.css" />
                <link rel="stylesheet" type="text/css" href="static/style/style-btnaddcart.css" />
                <title>Chi tiết</title>
            </Head>
            <header>
                <Menu />
                {/* caption */}
                <div className="caption text-center">
                    <h1>Chi tiết sản phẩm</h1>
                    <h3><FontAwesomeIcon icon={faHouseDamage} />Trang chủ / Sản phẩm / Chi tiết</h3>
                </div>
            </header>
            <section>
                <div className='row section1'>
                    <div className='col-sm-6'>
                        <Showimage />
                    </div>
                    <div className='col-sm-6'>
                        <Chitietsanpham />
                        <i>* Có thể sử dụng làm quà tặng, mang ý nghĩa sâu sắc với những người yêu môi trường.</i>
                        <div className='addcart'>
                        <Buttonaddcart />
                        <button className="themsanpham">Thêm vào giỏ hàng</button>
                        </div>
                    </div>
                    <Motasanpham />
                    <Danhsachsanpham />
                </div>
            </section>
            <Footer/>
        </div>
    )
}