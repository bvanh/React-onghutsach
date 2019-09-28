import React from 'react';
import ReactDOM from 'react-dom';
const collection = [
    {
        src: './static/img/cobang1.png',
        caption: 'anhcobang1'
    },
    {
        src: './static/img/cobang2.jpg',
        caption: 'demo'
    },
    {
        src: './static/img/cobangkho2.jpg',
        caption: 'demo'
    },
    {
        src: './static/img/cobang4.jpg',
        caption: 'demo'
    },
    {
        src: './static/img/background-danhsach.png',
        caption: 'demo'
    },
    {
        src: './static/img/img7.jpg',
        caption: 'demo'
    },
];
const ratio = `3:2`;


export default class Showimage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0,
        }
        const ratioWHArray = ratio.split(":");
        this.ratioWH = ratioWHArray[0] / ratioWHArray[1];

        this.backward = this.backward.bind(this);
        this.forward = this.forward.bind(this);
        this.setSlideIndex = this.setSlideIndex.bind(this);
        this.getNewSlideIndex = this.getNewSlideIndex.bind(this);
        this.updateDimensions = this.updateDimensions.bind(this);
    }
    getNewSlideIndex(step) {
        const slideIndex = this.state.slideIndex;
        const numberSlide = collection.length;

        let newSlideIndex = slideIndex + step;

        if (newSlideIndex >= numberSlide) newSlideIndex = 0;
        else if (newSlideIndex < 0) newSlideIndex = numberSlide - 1;

        return newSlideIndex;
    }
    backward() {
        this.setState({
            slideIndex: this.getNewSlideIndex(-1)
        });
    }

    // Tiến tới ảnh phía sau, tức index tăng 1 => step = 1
    forward() {
        this.setState({
            slideIndex: this.getNewSlideIndex(1)
        });
    }

    // Xác định slideIndex nào sẽ được active
    setSlideIndex(index) {
        this.setState({
            slideIndex: index
        })
    }
    // resize ảnh theo khung hình
    updateDimensions() {
        this.containerElm.style.height
            = `${this.containerElm.offsetWidth / this.ratioWH}px`;
        this.containerBottomElm.style.height
            = `${this.containerBottomElm.offsetWidth / collection.length / this.ratioWH}px`;
    }
    componentDidMount() {
        this.rootElm = ReactDOM.findDOMNode(this);
        this.containerElm = this.rootElm.querySelector(".container");
        this.containerBottomElm = this.rootElm.querySelector(".container-bottom");
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions);
    }
    render() {
        return (
            <div className="lp-slideshow-gallery">
                <div className="container">
                    {
                        collection.map((image, index) => {
                            return (
                                <div
                                    key={index}
                                    className={
                                        `slide ${this.state.slideIndex === index ? "active" : ""}`
                                    }
                                >
                                    <div className="number-text">
                                        {`${index + 1} / ${collection.length}`}
                                    </div>
                                    <img className="image" src={image.src} alt={image.caption} />
                                </div>
                            )
                        })
                    }

                    <span className="prev" onClick={this.backward}>❮</span>
                    <span className="next" onClick={this.forward}>❯</span>
                </div>

                <div className="container-bottom">
                    {
                        collection.map((image, index) => {
                            return (
                                <img
                                    key={index}
                                    src={image.src}
                                    alt={image.caption}
                                    className={
                                        `image ${this.state.slideIndex === index ? "active" : ""}`
                                    }
                                    onClick={() => this.setSlideIndex(index)}
                                    style={{
                                        width: `${1 / collection.length * 100}%`,
                                        height: `100%`
                                    }}
                                />
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}