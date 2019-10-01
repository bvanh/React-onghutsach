const danhsach = {
    items: [
        {
            id: 1,
            src: './static/img/cobang1.png',
            ten: 'Ống hút cỏ tươi',
            soluong: 'Hộp 50 ống',
            quality: 1,
            thongtin: [
                '50 ống hút cỏ bàng đường kính từ 4mm – 7mm để uống cafe, nước lọc và trà.',
                'Ống hút được làm thủ công tại Việt Nam từ cây cỏ bàng; đạt tiêu chuẩn xuất khẩu sang Đức.',
                '100% thân thiện với tự nhiên, an toàn với sức khỏe con người.',
                'Ống hút được bảo quản trong hộp đựng bằng giấy Kraft cao cấp có thiết kế độc đáo.'
            ],
            gia: 60000,
            danhgia: 3
        },
        {
            id: 2,
            src: './static/img/cobang2.jpg',
            ten: 'Ống hút cỏ khô',
            soluong: 'Hộp 50 ống',
            gia: 50000,
            danhgia: 4
        },
        {
            id: 3,
            src: './static/img/cobang3.jpg',
            ten: 'Ống hút cỏ khô',
            soluong: 'Hộp 100 ống',
            gia: 100000,
            danhgia: 4
        },
        {
            id: 4,
            src: './static/img/cobang4.jpg',
            ten: 'Ống hút cỏ tươi',
            soluong: 'Hộp 250 ống',
            gia: 250000,
            danhgia: 3
        },
        {
            id: 5,
            src: './static/img/cobangkho4.jpg',
            ten: 'Ống hút cỏ khô',
            soluong: 'Hộp 500 ống',
            gia: 500000,
            danhgia: 2
        },
    ],
    voucher: [
        {
            code: 'THANGMUOI',
            value: 20000
        },
        {
            code: 'SINHNHAT',
            value: 50000
        }

    ],
    codefake: '',
    khuyenmai: 0
}
export default danhsach;