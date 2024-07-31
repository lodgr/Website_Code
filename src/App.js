import React, { useRef } from "react";
import "./App.css";

function App() {
    const featuresRef = useRef(null);
    const pricingRef = useRef(null);
    const resourcesRef = useRef(null);

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div className='main-container'>
            <div className='group' ref={featuresRef}>
                <div className='wrapper'>
                    <span className='text'>
                        A software tool to automate your lodging tasks
                    </span>
                    <span className='text-2'>
                        Our cutting-edge AI solution connects with all your rental platforms
                        <br />
                        allowing you to sit back and enjoy efficient turnovers and better
                        reviews
                    </span>
                </div>
                <div className='wrapper-2'>
                    <div className='section'>
                        <div className='section-2'>
                            <span className='text-3'>
                                Answer guests using
                                <br />
                                conversational AI
                            </span>
                            <span className='text-4'>
                                Be it phone calls or chats, never miss out on a booking. Provide
                                answers and make bookings 24/7 using our advanced Voice and Chat
                                AI.
                            </span>
                        </div>
                        <div className='pic' />
                    </div>
                    <div className='wrapper-3'>
                        <div className='pic-2' />
                        <div className='wrapper-4'>
                            <span className='text-5'>Turn guest reviews into tasks</span>
                            <span className='text-6'>
                                Go through guest reviews immediately after a checkout
                                <br />
                                and convert any feedback into actionable tasks for the
                                <br />
                                maintenance staff to handle issues timely.
                            </span>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='section-3'>
                            <span className='text-7'>Convert availability to booking</span>
                            <span className='text-8'>
                                Track open nights and suggest guest extensions, <br />
                                early check-ins and late checkouts
                            </span>
                        </div>
                        <div className='img' />
                    </div>
                    <div className='group-2'>
                        <div className='pic-3' />
                        <div className='wrapper-5'>
                            <span className='text-9'>Enhance Guest Experiences</span>
                            <span className='text-a'>
                                Suggest local restaurants, shops and other <br />
                                fun activities based on their preferences using AI.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='box-2' ref={pricingRef}>
                <div className='group-3'>
                    <span className='text-b'>Pricing</span>
                   <span className='text-c'>Simple and transparent.</span>
                    <span className='text-d'>Free for beta testers !!!</span>
                </div>
                <div className='box-3'>
                <a href="https://forms.gle/faJGVTkbHhGDVLJCA" target="blank">
                    <span className='text-e'>Contact us</span>
                </a>
                </div>
            </div>
            <div className='box-4' ref={resourcesRef}>
                <div className='box-5'>
                    <div className='box-6'>
                        <div className='pic-4' onClick={reloadPage}/>
                        <div className='box-7'>
                            <span className='text-f' onClick={() => scrollToSection(featuresRef)}>Features</span>
                            <span className='text-10' onClick={() => scrollToSection(pricingRef)}>Pricing</span>
                            <span className='text-11' onClick={() => scrollToSection(resourcesRef)}>Resources</span>
                        </div>
                    </div>
                    <div className='group-4'>
                        <div className='box-8'>
                            <span className='text-12'>
                                Automate communication on your
                                <br />
                                hotel or rental property
                            </span>
                            <span className='text-13'>
                                Deliver exceptional customer care and streamline operations with
                                our intelligent AI platform.
                            </span>
                        </div>
                        <div className='box-9'>
                            <a href="https://forms.gle/faJGVTkbHhGDVLJCA" target="blank">
                            <span className='text-14'>Get in touch</span>
                            </a>
                        </div>
                        <span className='text-15'>*coming soon</span>
                        <div className='img-2' />
                    </div>
                </div>
            </div>
            <div className='group-5' ref={resourcesRef}>
                <div className='group-6'>
                    <span className='text-16'>Lodgr</span>
                    <div className='box-a'>
                        <span className='text-17'>Product</span>
                        <div className='box-b'>
                            <span className='text-18' onClick={() => scrollToSection(featuresRef)}>Features</span>
                            <span className='text-19' onClick={() => scrollToSection(pricingRef)}>Pricing</span>
                        </div>
                    </div>
                    <div className='section-4'>
                        <span className='text-1a'>Follow Us</span>
                        <div className='box-c'>
                            <span className='text-1b'>Linkedin</span>
                            <span className='text-1c'>Instagram</span>
                            <span className='text-1d'>Twitter</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default App;

