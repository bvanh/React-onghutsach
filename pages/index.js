import React from 'react';
import Head from 'next/head';
import Menu from '../components/menu';
import Footer from '../components/footer';
const Index = () => (
    <div>
        <Head>
            <div>
                <link rel="stylesheet" type="text/css" href="static/style/style-index.css" />
                <link rel="stylesheet" type="text/css" href="static/style/style-menu.css" />
                <link rel="stylesheet" type="text/css" href="static/style/style-footer.css" />
                <title>Onghuthuuco-Trang chủ</title>
            </div>
        </Head>
        <header>
            <Menu />
            {/* caption */}
            <div className="caption text-center">
                <h1>Onghuthuuco.com</h1>
                <p>cùng chúng tôi</p>
                <h1>Thay đổi nhỏ-Tác động lớn</h1>
                <button className="xemsanpham">Xem sản phẩm</button>
            </div>
        </header>
        <section>
            {/* gioithieu */}
            <div className="text-center">
                <p className="gioithieu">Môi trường đang ngày càng xuống cấp trầm trọng, đòi hỏi mỗi cá nhân phải có ý thức bảo vệ-
      gìn giữ. ?Với những tiêu chí đó, <b style={{ fontSize: '2rem' }}>Onghuthuuco.com</b> trân trọng giới
      thiệu các sản phẩm ống hút hữu cơ thân thiện với môi trường . </p>
            </div>
            {/* onghutco */}
            <div className="row section1">
                <div className="col-lg-6">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="static/img/onghutco1.png" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="static/img/onghutco2.png" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="static/img/onghutco3.png" className="d-block w-100" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <h2>Ống hút cỏ</h2>
                    <p className="thongtin">-Ống hút cỏ bàng đường kính từ 4mm – 7mm để uống cafe, nước lọc và trà.</p>
                    <p className="thongtin">-Ống hút được làm thủ công tại Việt Nam từ cây cỏ bàng; đạt tiêu chuẩn xuất khẩu sang Đức..
      </p>
                    <p className="thongtin">-100% thân thiện với tự nhiên, an toàn với sức khỏe con người.</p>
                    <button className="btn-chitiet">Xem Chi tiết</button>
                </div>
            </div>
            {/* onghutgao */}
            <div className="row section1">
                <div className="col-lg-6">
                    <h2>Ống hút gạo</h2>
                    <p className="thongtin">-Ống hút cỏ bàng đường kính từ 4mm – 7mm để uống cafe, nước lọc và trà.</p>
                    <p className="thongtin">-Ống hút được làm thủ công tại Việt Nam từ cây cỏ bàng; đạt tiêu chuẩn xuất khẩu sang Đức..
      </p>
                    <p className="thongtin">-100% thân thiện với tự nhiên, an toàn với sức khỏe con người.</p>
                    <button className="btn-chitiet">Xem Chi tiết</button>
                </div>
                <div className="col-lg-6">
                    <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators2" data-slide-to={0} className="active" />
                            <li data-target="#carouselExampleIndicators2" data-slide-to={1} />
                            <li data-target="#carouselExampleIndicators2" data-slide-to={2} />
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="static/img/onghutgao1.png" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="static/img/onghutgao2.png" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="static/img/onghutgao3.png" className="d-block w-100" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* onghutre */}
            <div className="row section1">
                <div className="col-lg-6">
                    <div id="carouselExampleIndicators3" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators" id="itemcomment">
                            <li data-target="#carouselExampleIndicators3" data-slide-to={0} className="active" />
                            <li data-target="#carouselExampleIndicators3" data-slide-to={1} />
                            <li data-target="#carouselExampleIndicators3" data-slide-to={2} />
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="static/img/onghuttre1.png" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="static/img/onghuttre2.png" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="static/img/onghuttre3.png" className="d-block w-100" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <h2>Ống hút tre</h2>
                    <p className="thongtin">-Ống hút cỏ bàng đường kính từ 4mm – 7mm để uống cafe, nước lọc và trà.</p>
                    <p className="thongtin">-Ống hút được làm thủ công tại Việt Nam từ cây cỏ bàng; đạt tiêu chuẩn xuất khẩu sang Đức..
      </p>
                    <p className="thongtin">-100% thân thiện với tự nhiên, an toàn với sức khỏe con người.</p>
                    <button className="btn-chitiet">Xem Chi tiết</button>
                </div>
            </div>
            <div className="text-center">
                <button className="xemsanpham">Xem tất cả sản phẩm</button>
            </div>
            <div id="carouselContent" className="carousel slide">
                <ol className="carousel-indicators carousel-text">
                    <img src="static/img/icon/icon10.png" data-target="#carouselContent" data-slide-to={0} className="active" />
                    <img src="static/img/icon/icon11.png" data-target="#carouselContent" data-slide-to={1} />
                    <img src="static/img/icon/icon12.png" data-target="#carouselContent" data-slide-to={2} />
                </ol>
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active text-center p-4">
                        <p>Với tầm nhìn” Sống với giấc mơ xanh”” Greenjoy mong muốn việc sử dụng ống hút cỏ thiên nhiên sẽ góp phần
                          giảm thiểu lượng ống hút nhựa và rác thải nhựa ra môi trường, đặc biệt là đại dương và các sinh vật biển nhỏ
          bé.</p>
                        <b>" Hoàng-<i>Họa sĩ</i> "</b>
                    </div>
                    <div className="carousel-item text-center p-4">
                        <p>Ống hút thiên nhiên được làm từ cây cỏ bàng là một giải pháp tối ưu thay thế ống hút nhựa. Ống được sản
          xuất hoàn toàn tự nhiên từ cây cỏ bàng (cây bàng, cây cói ) với tên khoa học là Lepironia articulate.</p>
                        <b>" Linh-<i>ca sĩ</i>"</b>
                    </div>
                    <div className="carousel-item text-center p-4">
                        <p>Sản phẩm ống hút tre sử dụng nguyên liệu cây trúc sẵn có và nhân công tại chỗ. Sản phẩm đã góp phần giúp
          các chị em vừa có thời gian ở nhà chăm sóc gia đình vừa có thêm một phần thu nhập.</p>
                        <b>" Thùy-<i>diễn viên</i>"</b>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </div>
);

export default Index;