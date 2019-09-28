import Link from 'next/link';
import danhsach from './data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
function Rating(props) {
    let rater = [];
    for (let i = 0; i < props.value; i++) {
        rater.push(<FontAwesomeIcon key={i} icon={faStar}/>)
    }
    return rater;
}
class Danhsachssanpham extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: danhsach.items,
        }
    }
    render() {
        const list = this.state.items;
        const printDanhsach = list.map((item, index) =>
            <Link href='/chitiet' key={index}>
                <div className="col-sm-4 pt-1 pb-3 productItem" data-price="5-10" data-level={4} data-popularity={5} data-comment={4} data-kindhouse="canho">
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
            <div className="row products " style={{ paddingTop: '1rem' }} id="products1">


                {printDanhsach}


            </div>
        )
    }
}
export default Danhsachssanpham;