import React, {useState} from 'react';
import Link from 'next/link';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

const SliderTwo = () => {
    const [swiper, setSwiper] = useState(null);

    const goNext = () => {
        if (swiper !== null) {
          swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (swiper !== null) {
          swiper.slidePrev();
        }
    };

    return (
        <section className="slider-area slider-area2 text-center">
            <div className="homepage-slide1">
                <Swiper getSwiper={setSwiper}>
                    <div className="single-slide-item slide-bg4">
                        <div className="slide-item-table">
                            <div className="slide-item-tablecell">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-8 mx-auto">
                                            <div className="slider-heading">
                                                <p className="slider__meta">Welcome to Rhema Compassion</p>
                                                <h2 className="slider__title">Your help will make the world better</h2>
                                                <Link href="/about" className="theme-btn">discover more</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="single-slide-item slide-bg3">
                        <div className="slide-item-table">
                            <div className="slide-item-tablecell">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-8 mx-auto">
                                            <div className="slider-heading">
                                                <p className="slider__meta">Help those in need</p>
                                                <h2 className="slider__title">Lend a helping hand and get involved</h2>
                                                <Link href="/donate" className="theme-btn">discover more</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="single-slide-item slide-bg5">
                        <div className="slide-item-table">
                            <div className="slide-item-tablecell">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-8 mx-auto">
                                            <div className="slider-heading">
                                                <p className="slider__meta">We Touch lives everyday</p>
                                                <h2 className="slider__title">Volunteer in kind and donations</h2>
                                                <Link href="/donate" className="theme-btn">discover more</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Swiper>
                <div className="owl-dots">
                    <div onClick={goPrev} className="owl-dot"><span></span></div>
                    <div onClick={goNext} className="owl-dot"><span></span></div>
                </div>
            </div>
        </section>
    );
};

export default SliderTwo;
