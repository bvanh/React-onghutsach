import Link from 'next/link';
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
class Chitietsanpham extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: danhsach.items,
        }
    }
    render() {
        const list = this.state.items;
        const listThongtin = list[0].thongtin;
        // thong tin chi tiet san pham
        const printThongtin = listThongtin.map((item, index) =>
            <p key={index}>- {item}</p>
        )
        // thong tin co ban
        const printList =
            <div>
                <h3>
                    {list[0].ten}
                </h3>
                <Rating
                    value={list[0].danhgia}
                />
                <p>{list[0].gia.toLocaleString()} vnđ</p>
            </div>
        return (
            <div className='thongtinsanpham'>
                {printList}
                <h5>{list[0].soluong}</h5><p>bao gồm:</p>
                {printThongtin}
            </div>

        )
    }
}
export default Chitietsanpham;