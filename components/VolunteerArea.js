import React from 'react';
import Image from 'next/image';

const VolunteerArea = () => {
    return (
        <section className="service-area volunteer-area text-center">
            <Image width={31} height={30} src="/images/heart-icon1.png" alt="" className="heart-icon heart-icon-1" />
            <Image width={87} height={140} src="/images/heart-icon2.png" alt="" className="heart-icon heart-icon-2" />
            <Image width={34} height={31} src="/images/heart-icon3.png" alt="" className="heart-icon heart-icon-3" />
            <Image width={14} height={15} src="/images/heart-icon4.png" alt="" className="heart-icon heart-icon-4" />
            <Image width={93} height={88} src="/images/heart-icon5.png" alt="" className="heart-icon heart-icon-5" />
            <Image width={20} height={18} src="/images/heart-icon6.png" alt="" className="heart-icon heart-icon-6" />
            <Image width={14} height={15} src="/images/heart-icon7.png" alt="" className="heart-icon heart-icon-7" />
            <Image width={83} height={79} src="/images/heart-icon8.png" alt="" className="heart-icon heart-icon-8" />
            <Image width={20} height={18} src="/images/heart-icon9.png" alt="" className="heart-icon heart-icon-9" />
            <Image width={32} height={30} src="/images/heart-icon10.png" alt="" className="heart-icon heart-icon-10" />
            <Image width={47} height={53} src="/images/heart-icon11.png" alt="" className="heart-icon heart-icon-11" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <div className="section-heading service-heading">
                            <div className="section-icon">
                                <Image width={16} height={14} src="/images/section-icon.png" alt="section-icon" />
                            </div>
                            <h2 className="section__title">Sponsors Around
                                the World</h2>
                            <p className="section__meta">help us now</p>
                        </div>
                    </div>
                </div>
                <div className="row service-wrap">
                    <div className="col-lg-8 mx-auto">
                        <div className="service-item">
                            <Image width={915} height={479} src="/images/volunteer-img.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VolunteerArea;
