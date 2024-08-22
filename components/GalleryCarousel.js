import React, {useEffect} from 'react';
import Image from 'next/image';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import Link from 'next/link';


const GalleryCarousel = () => {

    // useEffect(() => {
    //     const lightbox = GLightbox({
    //         touchNavigation: true,
    //         loop: true,
    //         autoplayVideos: true,
    //         beforeSlideLoad: (slide, data) => {
    //             // Need to execute a script in the slide?
    //             // You can do that here...
    //         }
    //     });

    // });

    const params = {
        slidesPerView : 2,
        loop: true,
        speed: 1000,
        spaceBetween : 30,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        // Responsive breakpoints
        breakpoints: {
            // 1499:{
            //     slidesPerView : 1
            // }

            // 991:{
            //     slidesPerView : 1
            // }

            // 767:{
            //     slidesPerView : 1

            // },

            // 575:{
            //     slidesPerView : 1
            // }
        }
    }

    return (
        <section className="gallery-area text-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <div className="section-heading">
                            <div className="section-icon">
                                <Image width={16} height={14} src="/images/section-icon.png" alt="section-icon" />
                            </div>
                            <h2 className="section__title text__white">Check Our Gallery</h2>
                            <p className="section__meta">photography</p>
                        </div>
                    </div>
                </div>
                <div className="row gallery-wrap">
                    <div className="col-lg-12">
                        <div className="gallery-carousel">

                            <Swiper {...params}>
                                <div className="gallery-item">
                                    <Image width={460} height={450} src="/images/gal1.jpeg" alt="" />
                                        <Link href="/images/gal1.jpeg" className="glightbox">
                                            <span className="gallery-icon"></span></Link>
                                </div>
                                <div className="gallery-item">
                                    <Image width={460} height={450} src="/images/gal2.jpeg" alt="" />
                                        <Link href="/images/gal2.jpeg" className="glightbox">
                                            <span className="gallery-icon"></span></Link>
                                </div>
                                <div className="gallery-item">
                                    <Image width={460} height={450} src="/images/gal3.jpeg" alt="" />
                                        <Link href="/images/gal3.jpeg" className="glightbox"> <span className="gallery-icon"></span></Link>
                                </div>
                                <div className="gallery-item">
                                    <Image width={460} height={450} src="/images/gal4.jpeg" alt="" />
                                        <Link href="/images/gal4.jpeg" className="glightbox">
                                            <span className="gallery-icon"></span></Link>
                                </div>
                                <div className="gallery-item">
                                    <Image width={460} height={450} src="/images/gal5.jpeg" alt="" />
                                        <Link href="/images/gal5.jpeg" className="glightbox"> <span className="gallery-icon"></span></Link>
                                </div>
                                <div className="gallery-item">
                                    <Image width={460} height={450} src="/images/gal6.jpeg" alt="" />
                                        <Link href="/images/gal6.jpeg" className="glightbox">
                                            <span className="gallery-icon"></span></Link>
                                </div>
                                <div className="gallery-item">
                                    <Image width={460} height={450} src="/images/gal7.jpeg" alt="" />
                                        <Link href="/images/gal7.jpeg" className="glightbox"> <span className="gallery-icon"></span></Link>
                                </div>
                                <div className="gallery-item">
                                    <Image width={460} height={450} src="/images/gal8.jpeg" alt="" />
                                    <Link href="/images/gal8.jpeg" className="glightbox"> <span className="gallery-icon"></span></Link>
                                </div>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GalleryCarousel;
