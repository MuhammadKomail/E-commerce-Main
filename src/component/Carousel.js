import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function CarouselComp(props) {
    return (
        <div className="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false}>
                <div>
                    <img alt="img1" src={props.pic1} />
                </div>
                <div>
                    <img alt="img1" src={props.pic2}/>
                </div>
                
            </Carousel>
        </div>
    );
}

