import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Events = () => {
    return (
        <section className="causes-area upcoming-event-area upcoming-event-area2">
            <div className="container">
                <div className="row blog-content-wrap">
                    <div className="col-lg-4">
                        <div className="blog-content">
                            <div className="blog-item blog-item1">
                                <div className="blog-img">
                                    <Image width={370} height={238} src="/images/img7.jpg" alt="" />
                            <span className="blog__tag blog__tag1">
                                <span className="date__num-text">6</span>
                                <span className="date__mon-text">may</span>
                            </span>
                                </div>
                                <div className="blog-inner-content">
                                    <h3 className="blog__title"><Link href="events-detail"><div>Save the planets</div></Link></h3>
                                    <ul className="blog__list">
                                        <li className="blog__dot-active">8:00am to 2:00pm</li>
                                        <li>Mathare</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-content">
                            <div className="blog-item blog-item2">
                                <div className="blog-img">
                                    <Image width={370} height={238} src="/images/img8.jpg" alt="" />
                            <span className="blog__tag blog__tag2">
                                <span className="date__num-text">9</span>
                                <span className="date__mon-text">mar</span>
                            </span>
                                </div>
                                <div className="blog-inner-content">
                                    <h3 className="blog__title"><Link href="events-detail"><div>Play for the world</div></Link></h3>
                                    <ul className="blog__list">
                                        <li className="blog__dot-active">8:00am to 2:00pm</li>
                                        <li>Mathare</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-content">
                            <div className="blog-item blog-item3">
                                <div className="blog-img">
                                    <Image width={370} height={238} src="/images/img9.jpg" alt="" />
                            <span className="blog__tag blog__tag3">
                                <span className="date__num-text">4</span>
                                <span className="date__mon-text">mar</span>
                            </span>
                                </div>
                                <div className="blog-inner-content">
                                    <h3 className="blog__title"><Link href="events-detail"><div>Medical camp Mathare</div></Link></h3>
                                    <ul className="blog__list">
                                        <li className="blog__dot-active">8:00am to 2:00pm</li>
                                        <li>Mathare</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-content">
                            <div className="blog-item blog-item4">
                                <div className="blog-img">
                                    <Image width={370} height={238} src="/images/img16.jpg" alt="" />
                            <span className="blog__tag blog__tag4">
                                <span className="date__num-text">2</span>
                                <span className="date__mon-text">mar</span>
                            </span>
                                </div>
                                <div className="blog-inner-content">
                                    <h3 className="blog__title"><Link href="events-detail"><div>Coding camp</div></Link></h3>
                                    <ul className="blog__list">
                                        <li className="blog__dot-active">8:00am to 2:00pm</li>
                                        <li>Kawangware</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-content">
                            <div className="blog-item blog-item1">
                                <div className="blog-img">
                                    <Image width={370} height={238} src="/images/img17.jpg" alt="" />
                            <span className="blog__tag blog__tag1">
                                <span className="date__num-text">22</span>
                                <span className="date__mon-text">mar</span>
                            </span>
                                </div>
                                <div className="blog-inner-content">
                                    <h3 className="blog__title"><Link href="events-detail"><div>Water plant construction</div></Link></h3>
                                    <ul className="blog__list">
                                        <li className="blog__dot-active">8:00am to 2:00pm</li>
                                        <li>Kibera</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-content">
                            <div className="blog-item blog-item2">
                                <div className="blog-img">
                                    <Image width={370} height={238} src="/images/img18.jpg" alt="" />
                            <span className="blog__tag blog__tag2">
                                <span className="date__num-text">11</span>
                                <span className="date__mon-text">fed</span>
                            </span>
                                </div>
                                <div className="blog-inner-content">
                                    <h3 className="blog__title"><Link href="events-detail"><div>Work and skills seminar</div></Link>
                                    </h3>
                                    <ul className="blog__list">
                                        <li className="blog__dot-active">8:00am to 2:00pm</li>
                                        <li>Mathare</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Events;
