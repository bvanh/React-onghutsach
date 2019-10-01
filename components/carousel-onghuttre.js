import React, { Component } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

const slideonghutgao = [
    {
        src: 'static/img/onghuttre1.png',
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: 'static/img/onghuttre2.png',
        altText: 'Slide 2',
        caption: 'Slide 2'
    },
    {
        src: 'static/img/onghuttre3.png',
        altText: 'Slide 3',
        caption: 'Slide 3'
    }
];
// carousel ống hút gạo
export default class Carousel3 extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.nextt.bind(this);
        this.previous = this.previouss.bind(this);
        this.goToIndex = this.goToIndexx.bind(this);
        this.onExiting = this.onExitingg.bind(this);
        this.onExited = this.onExitedd.bind(this);
    }

    onExitingg() {
        this.animating = true;
    }

    onExitedd() {
        this.animating = false;
    }

    nextt() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex ===slideonghutgao.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previouss() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? slideonghutgao.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndexx(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = this.state;

        const slides = slideonghutgao.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}
                >
                    <img src={item.src} alt={item.altText} />
                    <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
                </CarouselItem>
            );
        });

        return (
            <div>
                <Carousel
                    activeIndex={activeIndex}
                    next={this.next}
                    previous={this.previous}
                >
                    <CarouselIndicators items={slideonghutgao} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                </Carousel>
            </div>
        );
    }
}
Carousel.defaultProps = {
    interval: 100,
    pause: 'hover',
    keyboard: true,
    slide: true,
};