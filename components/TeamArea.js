import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const TeamArea = () => {
    return (
        <section className="team-area text-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <div className="section-heading">
                            <div className="section-icon">
                                <Image width={16} height={14} src="/images/section-icon.png" alt="section-icon" />
                            </div>
                            <h2 className="section__title">Our Volunteers</h2>
                            <p className="section__meta">meet profesionals</p>
                        </div>
                    </div>
                </div>
                <div className="row team-content-wrap">
                    <div className="col-lg-3 col-sm-6">
                        <div className="team-item team-item1">
                            <div className="team__img">
                                <Image width={270} height={295} src="/images/team.jpg" alt="team image" />
                                    <div className="team__img-links">
                                        <ul>
                                            <li><Link href="#"><i className="fa fa-twitter"></i></Link></li>
                                            <li><Link href="#"><i className="fa fa-facebook"></i></Link></li>
                                            <li><Link href="#"><i className="fa fa-pinterest"></i></Link></li>
                                            <li><Link href="#"><i className="fa fa-instagram"></i></Link></li>
                                        </ul>
                                    </div>
                            </div>
                            <div className="team__title">
                                <h3 className="team__title-title"><Link href="#">S.K. Ole Tipis</Link></h3>
                                <span className="team__title-meta">founder & CEO</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="team-item team-item2">
                            <div className="team__img">
                                <Image width={270} height={295} src="/images/team2.jpg" alt="team image" />
                                    <div className="team__img-links">
                                        <ul>
                                            <li><Link href="#"><i className="fa fa-twitter"></i></Link></li>
                                            <li><Link href="#"><i className="fa fa-facebook"></i></Link></li>
                                            <li><Link href="#"><i className="fa fa-pinterest"></i></Link></li>
                                            <li><Link href="#"><i className="fa fa-instagram"></i></Link></li>
                                        </ul>
                                    </div>
                            </div>
                            <div className="team__title">
                                <h3 className="team__title-title"><Link href="#">Dr. Munene joseph</Link></h3>
                                <span className="team__title-meta">Head - Operations</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="team-item team-item3">
                            <div className="team__img">
                                <Image width={270} height={295} src="/images/team3.jpg" alt="team image" />
                                    <div className="team__img-links">
                                        <ul>
                                            <li><Link href="#"><i className="fa fa-twitter"></i></Link></li>
                                            <li><Link href="#"><i className="fa fa-facebook"></i></Link></li>
                                            <li><Link href="#"><i className="fa fa-pinterest"></i></Link></li>
                                            <li><Link href="#"><i className="fa fa-instagram"></i></Link></li>
                                        </ul>
                                    </div>
                            </div>
                            <div className="team__title">
                                <h3 className="team__title-title"><Link href="#">Christine wambui</Link></h3>
                                <span className="team__title-meta">Head - Programs</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="team-item team-item4">
                            <div className="team__img">
                                <Image width={270} height={295} src="/images/team4.jpg" alt="team image" />
                                    <div className="team__img-links">
                                        <ul>
                                            <li><Link href="#"><i className="fa fa-twitter"></i></Link></li>
                                            <li><Link href="#"><i className="fa fa-facebook"></i></Link></li>
                                            <li><Link href="#"><i className="fa fa-pinterest"></i></Link></li>
                                            <li><Link href="#"><i className="fa fa-instagram"></i></Link></li>
                                        </ul>
                                    </div>
                            </div>
                            <div className="team__title">
                                <h3 className="team__title-title"><Link href="#">James Nganga</Link></h3>
                                <span className="team__title-meta">Head - Donations</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamArea;
