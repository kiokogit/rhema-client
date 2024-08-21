import React from 'react';
import Image from 'next/image';

const AboutArea = () => {
    return (
        <section className="about-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="about-large-img">
                            <Image width={1170} height={386} src="/images/about-cover.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="about-semi-img">
                            <Image width={400} height={349} src="/images/about.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="about-heading">
                            <div className="section-heading">
                                <div className="section-icon">
                                    <Image width={16} height={14} src="/images/section-icon.png" alt="section-icon" />
                                </div>
                                <h2 className="section__title">Inception</h2>
                                <p className="section__meta">Early Initiatives (2013-2016)</p>
                                <p className="section__desc">
                                Rhema Compassion Organisation was born 
                                out of a deep calling and burden that our 
                                Chairman and Founder felt for street children 
                                and vulnerable families since 2013. This journey began 
                                with a simple yet profound act: instead of giving
                                 money to street children, he chose to take them to 
                                 hotels for meals. This approach allowed him to understand 
                                 their stories and learn why they ended up on the streets.
                                <br />
                                Early Initiatives (2013-2016)
                                In 2016, our founder expanded his outreach by 
                                inviting street children to attend Sunday church 
                                services. This was soon followed by the establishment of 
                                a weekly feeding program every Tuesday, where he 
                                personally prepared meals at home and delivered them 
                                to those in need on the streets. The support for these 
                                efforts grew, with friends, well-wishers, and 
                                churches contributing both in-kind donations—such as 
                                food, clothing, and services—and monetary assistance.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="about-semi-img">
                            <Image width={400} height={349} src="/images/goals.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="about-heading">
                            <div className="section-heading">
                                <div className="section-icon">
                                    <Image width={16} height={14} src="/images/section-icon.png" alt="section-icon" />
                                </div>
                                <h2 className="section__title">Initiatives</h2>
                                <p className="section__meta">Street ministry and partnerships</p>
                                <p className="section__desc">
                                By 2018, these initiatives had grown into the Street Church Ministry, which began 
                                its work at Central Park in Nairobi. This ministry was a vibrant hub of 
                                activity, offering evangelism, counseling, feeding programs, talent shows, 
                                and clothing distribution to those in need. Recognizing the need for a formal 
                                structure to support and expand this mission, our founder began the process of 
                                registering an umbrella organization. This effort came to fruition on September 
                                10th, 2021, with the official registration of Rhema Compassion Organisation.
                                <br />
                                Throughout these formative years, from 2016 to 2021, Rhema Compassion 
                                Organisation formed valuable partnerships with orphanages and rehabilitation 
                                centers to provide comprehensive care for street children. Notably, 
                                Mogra Orphanage on Kiambu Road offered a safe haven for infants aged 1 
                                day to 2 years, while Mwangaza Rehabilitation Centre focused on supporting 
                                street children between 12 and 18 years old.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className="about-semi-img">
                            <Image width={400} height={349} src="/images/successes.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="about-heading">
                            <div className="section-heading">
                                <div className="section-icon">
                                    <Image width={16} height={14} src="/images/section-icon.png" alt="section-icon" />
                                </div>
                                <h2 className="section__title">Goals & Achievements</h2>
                                <p className="section__meta">Looking ahead</p>
                                <p className="section__desc">
                                We have a functional board that runs the organization. Besides, 
                                RCO has experts from all walks of life who are willing and ready to 
                                support this cause of feeding the needy in society.
                                We have fed and clothed thousands of less fortunate in society. We have 
                                come across and embraced many desperate people who need love in deed. 
                                We have learned our lessons and we are ready to launch into the future.
                                <br />
                                From 2024, RCO plans to narrow its focus and scope to street children between 
                                ages 3 and 10 years. We will seek to feed, educate and clothe them.
                                We are in the process of acquiring a centre that will help us provide 
                                holistic education to them. This holistic education will cater for their 
                                spiritual, physical, psychological, emotional, social and mental needs.
                                </p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default AboutArea;
