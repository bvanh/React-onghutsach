import React from 'react';
export default function Footer() {
    return (
        <footer>
            <div className="row"id='footer'>
                <div className="col-sm-4 footer">
                    <h4>Thông tin liên hệ</h4>
                    <a><i className="material-icons">local_offer</i>Địa chỉ:</a>
                    <a><i className="material-icons">local_post_office </i>Thông tin liên hệ</a>
                    <a><i className="material-icons"> local_phone</i>Số điện thoại</a>
                </div>
                <div className="col-sm-4 footer">
                    <h4>Danh Mục</h4>
                    <a><i className="material-icons">local_florist</i>Ống hút gạo</a>
                    <a><i className="material-icons">local_florist </i>Ống hút cỏ</a>
                    <a><i className="material-icons"> local_florist</i>Ống hút tre</a>
                </div>
                <div className="col-sm-4 footer">
                    <h4>Hỗ trợ khách hàng</h4>
                    <a><i className="material-icons">local_offer</i>Hướng dẫn mua hàng</a>
                    <a><i className="material-icons">local_post_office </i>Liên hệ góp ý</a>
                    <a><i className="material-icons"> local_phone</i>Chính sách đổi trả</a>
                </div>
            </div>
        </footer>

    )
}