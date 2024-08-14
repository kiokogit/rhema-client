import React from 'react';
import Image from 'next/image';
import Map from "./Map";
import Link from 'next/link';

const EventsDetail = () => {
    return (
        <section className="event-detail-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="blog-content">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <Image width={1170} height={514} src="/images/img19.jpg" alt="" />
                            <span className="blog__tag">
                                <span className="date__num-text">9</span>
                                <span className="date__mon-text">mar</span>
                            </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="event-detail-content">
                            <div className="event-detail-item">
                                <h3 className="event__title">Play for the world</h3>
                                <p className="event__text">
                                    There are many variations of passages of Lorem Ipsum available,
                                    but the majority have suffered alteration in some form, by injected humour,
                                    or randomised words which do not look even slightly believable.
                                    If you are going to use a passage of Lorem Ipsum,
                                    you need to be sure there isnt anything embarrassing hidden in the middle of text.
                                </p>
                                <p className="event__text">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type
                                    specimen book.
                                    It has survived not only five centuries, but also the leap into electronic
                                    typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                                    the release of Letraset sheets containing Lorem Ipsum passages,
                                    and more recently with desktop publishing software like Aldus PageMaker including
                                    versions
                                    of Lorem Ipsum ley of type and scrambled it to make a type specimen book.
                                </p>
                            </div>
                            <div className="event-detail-item">
                                <h3 className="event__title event__title2">Event Requirements</h3>
                                <p className="event__text">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type
                                    specimen book.
                                    It has survived not only five centuries, but also the leap into electronic
                                    typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                                    the release of Letraset sheets containing Lorem Ipsum passages,
                                    and more recently with desktop publishing software like Aldus PageMaker including
                                    versions
                                    of Lorem Ipsum ley of type and scrambled it to make a type specimen book.
                                </p>
                            </div>
                            <div className="event-detail-btn">
                                <Link href="#" className="theme-btn">register now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="event-detail-sidebar">
                            <div className="event-detail-item">
                                <h3 className="event__title">Event Details</h3>
                                <ul className="event__list">
                                    <li><span>Starting Time:</span> 8:00AM to 2:00PM</li>
                                    <li><span>Date:</span>9 March, 2019</li>
                                    <li><span>Category:</span>Health</li>
                                    <li><span>Phone:</span>666 888 0000</li>
                                    <li><span>Website:</span>Info@event.com</li>
                                    <li><span>Location:</span>8 Street, San Marcos London D29, UK</li>
                                </ul>
                            </div>
                            <div className="event-detail-item event-detail-item2">
                                <Map />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventsDetail;
