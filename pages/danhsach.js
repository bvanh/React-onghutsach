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
                    <div className="row">
                        {/* formweb */}
                        <div className=" test">
                            <div className="card">
                                <article className="card-group-item">
                                    <div className="card-header">
                                        <h6 className="title" style={{ margin: 0, fontSize: 18 }}><b>Chọn lọc theo:</b></h6>
                                    </div>
                                    <div className="filter-content">
                                        <div className="card-body">
                                            <p className="ten-luachon">Xếp Hạng Đánh Giá</p>
                                            <form>
                                                <label className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue={1} />
                                                    <span className="form-check-label">
                                                        1 sao
                    </span>
                                                </label> {/* form-check.// */}
                                                <label className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue={2} />
                                                    <span className="form-check-label">
                                                        Từ 2 sao
                    </span>
                                                </label> {/* form-check.// */}
                                                <label className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue={3} />
                                                    <span className="form-check-label">
                                                        Từ 3 sao
                    </span>
                                                </label> {/* form-check.// */}
                                                <label className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue={4} />
                                                    <span className="form-check-label">
                                                        Từ 4 sao
                    </span>
                                                </label> {/* form-check.// */}
                                                <label className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue={5} />
                                                    <span className="form-check-label">
                                                        5 sao
                    </span>
                                                </label> {/* form-check.// */}
                                            </form>
                                            <hr />
                                            <p className="ten-luachon">Mức Giá</p>
                                            <form>
                                                <label className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue="0-5" />
                                                    <span className="form-check-label">
                                                        Dưới 50.000đ
                    </span>
                                                </label> {/* form-check.// */}
                                                <label className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue="5-10" />
                                                    <span className="form-check-label">
                                                        Từ 50.000đ-100.000đ </span>
                                                </label> {/* form-check.// */}
                                                <label className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue="10-20" />
                                                    <span className="form-check-label">
                                                        Từ 100.000đ-200.000đ </span>
                                                </label> {/* form-check.// */}
                                                <label className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue="20-50" />
                                                    <span className="form-check-label">
                                                        Từ 200.000đ-500.000đ </span>
                                                </label> {/* form-check.// */}
                                                <label className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue={50} />
                                                    <span className="form-check-label">
                                                        Trên 500.000đ </span>
                                                </label> {/* form-check.// */}
                                            </form>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                        {/* formmobile */}
                        <div className=" test2" >
                            <div className="row">
                                <p className="sx2">Sắp xếp theo</p>
                                <div className="col-sm-8 loc1">
                                    <div className="dropdown list-mobile loc">
                                        <button className="btn1 loc2 dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Bộ lọc</button>
                                        <div className="dropdown-menu list-mobile2" aria-labelledby="dropdownMenuButton">
                                            <div className=" test3">
                                                <div className="card test4">
                                                    <article className="card-group-item">
                                                        <div className="filter-content">
                                                            <div className="card-body">
                                                                <p className="ten-luachon">Xếp Hạng Đánh Giá</p>
                                                                <form>
                                                                    <label className="form-check">
                                                                        <input className="form-check-input" type="checkbox" defaultValue={1} />
                                                                        <span className="form-check-label">
                                                                            1 sao
                              </span>
                                                                    </label> {/* form-check.// */}
                                                                    <label className="form-check">
                                                                        <input className="form-check-input" type="checkbox" defaultValue={2} />
                                                                        <span className="form-check-label">
                                                                            2 sao
                              </span>
                                                                    </label> {/* form-check.// */}
                                                                    <label className="form-check">
                                                                        <input className="form-check-input" type="checkbox" defaultValue={3} />
                                                                        <span className="form-check-label">
                                                                            3 sao
                              </span>
                                                                    </label> {/* form-check.// */}
                                                                    <label className="form-check">
                                                                        <input className="form-check-input" type="checkbox" defaultValue={4} />
                                                                        <span className="form-check-label">
                                                                            4 sao
                              </span>
                                                                    </label> {/* form-check.// */}
                                                                    <label className="form-check">
                                                                        <input className="form-check-input" type="checkbox" defaultValue={5} />
                                                                        <span className="form-check-label">
                                                                            5 sao
                              </span>
                                                                    </label> {/* form-check.// */}
                                                                </form>
                                                                <hr />
                                                                <p className="ten-luachon">Mức Giá</p>
                                                                <form>
                                                                    <label className="form-check">
                                                                        <input className="form-check-input" type="checkbox" defaultValue="0-5" />
                                                                        <span className="form-check-label">
                                                                            Dưới 500.000đ
                              </span>
                                                                    </label> {/* form-check.// */}
                                                                    <label className="form-check">
                                                                        <input className="form-check-input" type="checkbox" defaultValue="5-10" />
                                                                        <span className="form-check-label">
                                                                            Từ 500.000đ-1.000.000đ </span>
                                                                    </label> {/* form-check.// */}
                                                                    <label className="form-check">
                                                                        <input className="form-check-input" type="checkbox" defaultValue="10-20" />
                                                                        <span className="form-check-label">
                                                                            Từ 1.000.000đ-2.000.000đ </span>
                                                                    </label> {/* form-check.// */}
                                                                    <label className="form-check">
                                                                        <input className="form-check-input" type="checkbox" defaultValue="20-50" />
                                                                        <span className="form-check-label">
                                                                            Từ 2.000.000đ-5.000.000đ </span>
                                                                    </label> {/* form-check.// */}
                                                                    <label className="form-check">
                                                                        <input className="form-check-input" type="checkbox" defaultValue={50} />
                                                                        <span className="form-check-label">
                                                                            Trên 5.000.000đ </span>
                                                                    </label> {/* form-check.// */}
                                                                </form>

                                                            </div> {/* card-body.// */}
                                                        </div>
                                                    </article></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dropdown loc2 ">
                                        <button className=" btn1 dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Sắp xếp theo
              </button>
                                        <div className="dropdown-menu gia12" aria-labelledby="dropdownMenu2">
                                            <button className="dropdown-item" type="button" onclick="sortPriceLowHigh()">Giá tăng dần</button>
                                            <button className="dropdown-item" type="button" onclick="sortPriceHighLow()">Giá giảm dần</button>
                                        </div>
                                    </div>
                                    <div className="dropdown loc2">
                                        <input type="text" className="example" onkeyup="searchName()" id="myFilter" placeholder="Nhập tên sản phẩm..." style={{ fontFamily: 'Arial, FontAwesome' }} name="search" />
                                    </div>

                                </div>
                                <Danhsachsanpham />
                                <div className='hdsd'>
                                    <h5>Hướng dẫn sử dụng:</h5>
                                    <p className='hd'>Rửa sạch với nước lạnh hoặc nước muối trong 30s trước khi sử dụng. Sau khi dùng, để ống hút vào thùng rác hữu cơ</p>
                                    <h5>Bảo quản:</h5>
                                    <p className='hd'>Ống hút tươi: 5- 7 ngày (20 - 30 độ C) và 2 - 4 tuần (0 - 5 độ C). Ống hút khô: 6 tháng ở nhiệt độ phòng (10 - 30 độ C)</p>
                                </div>
                            </div>


                        </div>
                        <div className="text-center">
                            <button className="xemsanpham">Xem tất cả sản phẩm</button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}