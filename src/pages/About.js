import { useEffect } from 'react';
import './../css/about.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { TbTargetArrow } from "react-icons/tb";





function About() {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true,
        });
    }, []);
    return (
        <div className='about-main'>
            <section className='about-hero'>
            </section>
            <section className='who-we-are-container'>
                <div className='who-we-are'>
                    <div className='who-we-are-text'>
                        <h2 className='who-we-are-title'>WHO WE ARE</h2>
                        <p className='who-we-are-subtitle'>
                            MegaStruct is not just a construction company; we are a team of passionate professionals who believe in building the future. Our company is driven by a shared vision to create exceptional structures that not only meet the needs of our clients but also inspire communities. From the first blueprint to the final touches, we ensure every project reflects the highest standards of craftsmanship, safety, and sustainability. With over a decade of experience, MegaStruct has successfully completed numerous projects, ranging from residential homes to large-scale commercial buildings, all tailored to perfection.
                        </p>
                        <p className='who-we-are-subtitle'>
                            At MegaStruct, we understand that construction is more than just a process — it’s about shaping the environment in which people live, work, and thrive. Our approach is built on collaboration, trust, and a relentless pursuit of excellence. We take pride in using the latest technologies and methods to deliver projects on time, within budget, and with exceptional quality. Whether we are designing cutting-edge commercial spaces or constructing sustainable residential buildings, our mission is to bring dreams to life through innovation, precision, and hard work. Our commitment to our clients and our craft is what sets us apart in an ever-evolving industry.
                        </p>
                    </div>
                    <div className='who-we-are-image'>
                        <img src={`${process.env.PUBLIC_URL}/images/who-we-are-min.jpg`} alt='Mega Struct' loading="lazy" />
                    </div>
                </div>
            </section>
            <div
                className="aos-line"
                data-aos="fade-right"
            ></div>
            <section className='history-wrapper'>
                <div className='history-heading'>
                    <p className='history-subtitle'>
                        Every milestone, a brick in our story.
                    </p>
                    <h2 className='history-title'>Our Story Through Time</h2>
                </div>

                <div className='history-section'>
                    <div className='history-left-images'>
                        <img className='history-img1' src={`${process.env.PUBLIC_URL}/images/history1-min.jpg`} alt='Mega Struct' loading="lazy" />
                        <img className='history-img2' src={`${process.env.PUBLIC_URL}/images/history2-min.JPG`} alt='Mega Struct' loading="lazy" />
                        <img className='history-img3' src={`${process.env.PUBLIC_URL}/images/history3-min.jpeg`} alt='Mega Struct' loading="lazy" />
                    </div>

                    <div className='history-right-text'>
                        <h3 className='history-block-title'>Crafting Our Legacy</h3>
                        <p className='history-description'>
                            MegaStruct's journey began with a simple mission — to create structures that stand the test of time. What started as a small team of passionate builders has evolved into a leading force in the construction industry. Our growth is rooted in an unwavering commitment to excellence, precision, and innovation. Every brick laid and every blueprint drawn has been a step toward building not just physical spaces, but a reputation grounded in trust and reliability.
                        </p>
                        <p className='history-description'>
                            Over the years, we’ve expanded our capabilities to handle projects of all sizes and complexities. From intimate residential developments to expansive commercial infrastructures, we’ve delivered each project with the same care and attention to detail. Our story is one of continuous evolution — embracing new technologies, adopting sustainable methods, and always putting our clients’ visions at the center of everything we do.
                        </p>
                        <p className='history-description'>
                            As we look to the future, we carry forward a legacy built on hard work, creativity, and strong relationships. At MegaStruct, we don’t just construct buildings — we create landmarks, define skylines, and contribute to the growth of vibrant, enduring communities. Our history is more than a timeline — it’s a testament to our values and a foundation for what’s yet to come.
                        </p>
                    </div>
                </div>
            </section>
            <div
                className="aos-line"
                data-aos="fade-left"
            ></div>
            <section className="construction-workers">
                <h2 className="section-title">Meet Our Skilled Team</h2>
                <div className="workers-grid">
                    <div className="worker-card">
                        <img className='worker1' src={`${process.env.PUBLIC_URL}/images/worker1-min.jpeg`} alt='Worker' loading="lazy" />
                        <div className='worker-description'>
                            <h3 className="worker-name">John Doe</h3>
                            <p className="worker-position">Construction Manager</p>
                        </div>
                    </div>
                    <div className="worker-card">
                        <img src={`${process.env.PUBLIC_URL}/images/worker2-min.jpg`} alt='Worker' loading="lazy" />
                        <div className='worker-description'>
                            <h3 className="worker-name">Jane Smith</h3>
                            <p className="worker-position">Site Engineer</p>
                        </div>
                    </div>
                    <div className="worker-card">
                        <img src={`${process.env.PUBLIC_URL}/images/worker3-min.jpg`} alt='Worker' loading="lazy" />
                        <div className='worker-description'>
                            <h3 className="worker-name">David Brown</h3>
                            <p className="worker-position">Architect</p>
                        </div>
                    </div>
                </div >
            </section >
            <div
                className="aos-line"
                data-aos="fade-right"
            ></div>
            <section className='our-mission-section'>
                <div className='our-mission-container'>
                    <div className='our-mission-image'>
                        <img src={`${process.env.PUBLIC_URL}/images/ourMission-min.jpg`} alt='Our Mission' loading="lazy" />
                    </div>
                    <div className='our-mission-text'>
                        <h2 className='our-mission-title'>OUR MISSION</h2>
                        <TbTargetArrow className='target-arrow' />
                        <p className='our-mission-subtitle1'>
                            At MegaStruct, our mission goes beyond construction — it's about shaping environments where life and work thrive. With every beam placed and every wall raised, we aim to build spaces that empower, inspire, and endure.
                        </p>
                        <p className='our-mission-subtitle2'>
                            Driven by innovation and guided by integrity, we are committed to delivering exceptional results. From sustainable solutions to architectural precision, our work reflects our passion for progress and our dedication to a better built world.
                        </p>
                    </div>
                </div>
            </section>



        </div >
    )
}


export default About;