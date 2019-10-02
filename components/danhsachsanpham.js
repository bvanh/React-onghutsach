import Link from 'next/link';
import Head from 'next/head';
import danhsach from './data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
function Rating(props) {
    let rater = [];
    for (let i = 0; i < props.value; i++) {
        rater.push(<FontAwesomeIcon key={i} icon={faStar} />)
    }
    return rater;
}
class Danhsachssanpham extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: danhsach.items,
            search: '',
        }
    }
    changeSearch(val) {
        this.setState({
            search: val.target.value
        })
    }
    checkBox(e){
        const val=e.target.checked;
        const value=e.target.name;
        console.log(value)
    }
    render() {
        const list = this.state.items.filter((fil) =>
            fil.ten.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1

        );
        const printDanhsach = list.map((item, index) =>
            <Link href='/chitiet' key={index}>
                <div className="col-sm-4 pt-1 pb-3 productItem">
                    <a className="card-title" key={index}>
                        <img src={item.src} className="card-img-top" alt="..." style={{ paddingBottom: '.5rem' }} />
                        <h5>{item.ten}(<i className='soluong'>{item.soluong}</i>)</h5>
                        <Rating
                            value={item.danhgia}
                        />
                        <p>{item.gia.toLocaleString()} vnđ</p>
                    </a>
                </div>
            </Link>
        );
        return (
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
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                name="ladygaga"
                                                onChange={this.checkBox.bind(this)}
                                            />
                                            <span className="form-check-label">
                                                1 sao
        </span>
                                        </label> {/* form-check.// */}
                                        <label className="form-check">
                                            <input className="form-check-input" type="checkbox" />
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
                                                                <input 
                                                                className="form-check-input" 
                                                                type="checkbox"
                                                                // onChange={this.checkBox.bind(this)}
                                                                />
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
                                <input
                                    type="text"
                                    className="example"
                                    value={this.state.search}
                                    onChange={this.changeSearch.bind(this)}
                                    id="myFilter"
                                    placeholder="Nhập tên sản phẩm..."
                                    style={{ fontFamily: 'Arial, FontAwesome' }}
                                    name="search" />
                            </div>

                        </div>
                        <div className="row products " style={{ paddingTop: '1rem' }} id="products1">
                            {printDanhsach}
                        </div>
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
        )
    }
}
export default Danhsachssanpham;