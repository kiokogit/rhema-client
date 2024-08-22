import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const Volunteer = () => {
    return (
        <section className="contact-form-area register-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <div className="section-heading text-center">
                            <div className="section-icon">
                                <Image width={16} height={14} src="/images/section-icon.png" alt="section-icon" />
                            </div>
                            <h2 className="section__title">Register Now</h2>
                            <p className="section__meta">join us now</p>
                        </div>
                    </div>
                </div>
                <div className="row form-shared-wrap">
                    <div className="col-lg-6">
                        <div className="form-shared-content">
                            <div className="form-img">
                                <Image width={570} height={272} src="/images/volunteers.jpg" alt="" />
                            </div>
                            <div className="form-content">
                                <h3 className="form__title">Why Volunteer with Rhema?</h3>
                                <p className="form__desc">
                                At Rhema, we are more than just a charity 
                                organization—we are a community dedicated to making a 
                                positive impact in the lives of those in need. We believe 
                                that with the power of compassion and collective effort, 
                                we can create lasting change. We invite you to become a part of
                                 our mission by volunteering your time, skills, and resources to
                                  help us continue our vital work.<br/>

                                By joining our team of volunteers, you will 
                                have the opportunity to contribute to meaningful causes, 
                                connect with like-minded individuals, and make a 
                                real difference in the lives of many. Whether you are passionate 
                                about fundraising, event planning, community outreach, 
                                or simply lending a helping hand, there is a place for you at Rhema
                                </p>
                                <ul className="form__list">
                                    <h3 className="form__title">Volunteer Requirements:</h3>
                                    <li><i className="fa fa-check"></i> A passion for charitable causes and a desire to help others.</li>
                                    <li><i className="fa fa-check"></i> A commitment to our mission and values.</li>
                                    <li><i className="fa fa-check"></i> Willingness to dedicate time and effort to volunteer activities.</li>
                                    <li><i className="fa fa-check"></i> Ability to work well within a team and communicate effectively.</li>
                                </ul>
                                <div className="contact-us-box">
                                    <div className="contact__item contact__item2">
                                        <h4>Call us</h4>
                                        <Link href="tel:+254728495548">+254728495548</Link>
                                    </div>
                                    <div className="contact__item contact__item2">
                                        <h4>Send email</h4>
                                        <Link href="mailto:rhemacompassionkenya.org@gmail.com">rhemacompassionkenya.org@gmail.com</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-shared">
                            <form action="#">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Full Name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Email Address" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input type="number" className="form-control" placeholder="Phone Number" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Address" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Date of Birth" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Occupation" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <textarea className="textarea" name="message"
                                                      placeholder="Write a Message"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <button className="theme-btn submit__btn">send message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Volunteer;
