import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';


const Donate = () => {
    const [donateMethod, setDonateMethod] = useState('paypal')
    // const paypalLink = "https://www.paypal.com/donate?business=KUH56ALFQRWF2&currency_code=USD";
    const link2 = "https://www.paypal.com/donate/?hosted_button_id=KUH56ALFQRWF2"
    return (
        <section className="donate-area2">
            <div className="container">
                <div className="row donate-content-wrap">
                    <div className="col-lg-8">
        
                        {/* <div className="donate-item">
                            <h3 className="donate__title">Personal Info</h3>
                            <div className="form-shared">
                                <form action="#">
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="First Name" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Last Name" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group">
                                                <input type="email" className="form-control"
                                                       placeholder="Email Address" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Phone Number" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Address" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Country" />
                                                {/* <div className="select-group">
                                                    <select className="select-option">
                                                        <option value="Country">Country</option>
                                                        <option value="usa">Usa</option>
                                                        <option value="Uk">Uk</option>
                                                        <option value="Pakistan">Pakistan</option>
                                                        <option value="Bangladesh">Bangladesh</option>
                                                        <option value="India">India</option>
                                                    </select>
                                                </div> 
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <textarea className="textarea" name="message"
                                                      placeholder="Leave a Comment"></textarea>
                                        </div>
                                        <div className="col-lg-12">
                                            {/* <button className="theme-btn submit__btn">Donate via paypal</button> 
                                            <div>
                                                <p>Click the button below to submit details and donate via PayPal.</p>
                                                <Link className='theme-btn' href={link2} target="_blank" rel="noopener noreferrer">
                                                <img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_150x38.png" alt="Donate via PayPal" 
                                                    />
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            or use MPESA:
                                            {/* <button className="theme-btn submit__btn">Donate via paypal</button> 
                                            <div>
                                                <p>--</p>
                                                <p> Mpesa Till No. : 400200 </p>
                                               
                                                {/* Account: 17491 
                                                <p>
                                                    Bank Account Details
                                                    Account Name: Rhema Compassion Organization 
                                                    <br />
                                                    Bank: Cooperative Bank of Kenya
                                                    <br />
                                                    Acc. No. 01134801152800
                                                    <br/>
                                                    Swift code: Kcookena
                                                </p>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                         */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Donate;
