import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

export default class Motasanpham extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div className='mota'>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              <p className='a'>Mô Tả</p>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              <p className='a'>Đánh giá</p>
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <div className='motasanpham'>
                  <h5>THÔNG TIN CHI TIẾT</h5>
                  <p>Thương hiệu</p>
                  <p>Kích cỡ</p>
                  <p>Màu/ Họa tiết</p>
                  <p>Xuất sứ</p>
                  <p>Kích thưỡc</p>
                  <h5>Mô tả sản phẩm</h5>
                  <p>
                    Nếu ống hút cỏ bàng mỏng manh thích hợp dùng cho một lần thì ống hút kim loại lại là lựa chọn bền vững theo thời gian, chi phí ban đầu hơi cao nhưng tuổi thọ vô biên.Ống hút kim loại được làm từ thép không gỉ, nặng tay và chắc chắn hơn các loại ống hút thông thường.Có ba kiểu thiết kế cho bạn lựa chọn: loại ống hút đầu thẳng và loại được uống cong 90 độ ở 1/3 đầu ống và loại ống to hút trà sữa trân châu. Sản phẩm này có kích thước tương tự ống hút nhựa bình thường. Việc hút nước rất dễ dàng.Vì làm từ kim loại nên sản phẩm dẫn nhiệt khá tốt. Nếu đồ uống nóng khiến bạn phải dè chừng vì có thể làm bỏng miệng thì đồ uống mát khi dùng cùng ống hút kim loại sẽ "đã" hơn rất nhiều.
                  </p>
                  <p>Bạn có thể tự tin mang ống hút đi muôn nơi, để mỗi khi gọi nước, bên cạnh các lựa chọn về đường, đá, bạn còn có thể tự hào nói thêm "không dùng ống hút" và kiêu hãnh rút ống kim loại thân thiện với môi trường ra dùng. Các cửa hàng bán đồ uống cũng có thể đầu tư sử dụng ống hút kim loại và vệ sinh hằng ngày để giảm lượng ống hút nhựa khổng lồ thải ra môi trường.
                  </p>
                  <p>Ưu điểm</p>
                  <p>- Thân thiện với môi trường vì có thể dùng lâu.
                  </p>
                  <p>- Dễ dàng vệ sinh, bảo quản
                  </p>
                  <p>- Hút dễ dàng.
                  </p>
                  <p>- Thiết kế chắc chắn.
                  </p>
                </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
          </TabPane>
        </TabContent>
      </div>
    );
  }
}