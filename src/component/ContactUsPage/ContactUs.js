import React from 'react'
import './ContactUs.css'
import logo from '../Image/logo.jpg'
import address from '../ContactUsPage/svg/address.svg'
import email from '../ContactUsPage/svg/email.svg'
import phone from '../ContactUsPage/svg/phone.svg'



function ContactUs() {
    return (

        <div className="ContactUsBox bg-slate-900 ">
            <div className="boxContainer">
                <h1>Contact Us</h1>
                <div className="contactText">
                    <p className='text-center'>
                        We would love to hear from you! If you have any questions, comments or suggestions, please feel free to get in touch with us using the contact form below.
                        We will do our best to respond to your inquiry as soon as possible. Thank you for visiting our website!
                    </p>
                </div>
                <div className="box bg-slate-900 ">
                    <div className="BoxLeft">
                        <div className="address">
                            <div className="addressIcon">
                                <img src={address} alt='address' />
                            </div>
                            <div className="Ofice-address">
                                <p><strong>Address</strong></p>
                                CORPORATE INTERACTION CLUB
                                <br />
                                Ground Floor, Student Activity Center <br />
                                IIT Roorkee, Roorkee <br />
                                Uttarakhand, India - 247667
                            </div>
                        </div>
                        <div className="email">
                            <div className="emailIcon">
                                <img src={email} alt='email' />
                            </div>
                            <div className="emailAddress">
                                <p><strong>Email</strong></p>
                                <p>cig@iitr.ac.in</p>
                            </div>
                        </div>
                        <div className="phone">
                            <div className="phoneIcon">
                                <img src={phone} alt='phone' />
                            </div>
                            <div className="phoneNo">
                                <p><strong>Phone</strong></p>
                                <p>Prof. Sai R. Meka(Ass. Dean)</p>
                                <p>+91 1332 285378</p>
                                <p>Aman Vishwakarma(Chairperson)</p>
                                <p>+91 9569802087</p>
                            </div>
                        </div>
                    </div>
                    <div className="BoxRight">
                        <div className="contactright">
                            <div>
                                <form action="/" method="POST">
                                    <div className="form">
                                        <div className="formcss">
                                            <input
                                                name="Name"
                                                className="inputbox"
                                                type="text"
                                                placeholder="Name"
                                            />
                                            <input
                                                name="Number"
                                                className="inputbox"
                                                type="text"
                                                placeholder="Contact"
                                            />
                                            <input
                                                name="Email"
                                                className="inputbox"
                                                type="email"
                                                placeholder="Email ID"
                                            />
                                        </div>
                                        <div className="massageBox">
                                            <label>Message</label>
                                            <textarea
                                                name="Message"
                                                className="textarea"
                                                id=""
                                                cols="30"
                                                rows="6"
                                            >
                                            </textarea>
                                            <button type="submit" className="formbutton my-2">
                                                Send Message
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ContactUs